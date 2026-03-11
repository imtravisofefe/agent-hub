import { createServer } from "node:http";
import { createHmac } from "node:crypto";
import { execFile } from "node:child_process";
import { readFileSync } from "node:fs";

const PORT = 9876;
const SECRET = readFileSync("/root/agent-hub/.webhook-secret", "utf8").trim();
const REPO_DIR = "/root/agent-hub";
const DEPLOY_SCRIPT = "/root/agent-hub/scripts/deploy.sh";

let deploying = false;
let pendingDeploy = false;

function verify(signature, body) {
  if (!signature) return false;
  const hmac = createHmac("sha256", SECRET).update(body).digest("hex");
  return signature === `sha256=${hmac}`;
}

function deploy() {
  if (deploying) {
    pendingDeploy = true;
    console.log(`[${ts()}] Deploy already running - queued next one`);
    return;
  }
  deploying = true;
  pendingDeploy = false;
  console.log(`[${ts()}] Starting deploy...`);

  execFile("bash", [DEPLOY_SCRIPT], { cwd: REPO_DIR, timeout: 120000 }, (err, stdout, stderr) => {
    deploying = false;
    if (err) {
      console.error(`[${ts()}] Deploy failed:`, err.message);
      if (stderr) console.error(stderr);
    } else {
      console.log(`[${ts()}] Deploy complete`);
      if (stdout.trim()) console.log(stdout.trim());
    }
    if (pendingDeploy) {
      console.log(`[${ts()}] Running queued deploy...`);
      deploy();
    }
  });
}

function ts() {
  return new Date().toISOString();
}

const server = createServer((req, res) => {
  if (req.method === "POST" && req.url === "/webhook") {
    let body = "";
    req.on("data", (c) => (body += c));
    req.on("end", () => {
      const sig = req.headers["x-hub-signature-256"];
      if (!verify(sig, body)) {
        console.log(`[${ts()}] Rejected - bad signature`);
        res.writeHead(401);
        res.end("Unauthorized");
        return;
      }

      try {
        const payload = JSON.parse(body);
        const ref = payload.ref || "";
        if (ref === "refs/heads/main") {
          console.log(`[${ts()}] Push to main by ${payload.pusher?.name || "unknown"}`);
          res.writeHead(200);
          res.end("Deploying");
          deploy();
        } else {
          console.log(`[${ts()}] Ignored push to ${ref}`);
          res.writeHead(200);
          res.end("Ignored - not main");
        }
      } catch (e) {
        res.writeHead(400);
        res.end("Bad payload");
      }
    });
  } else if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200);
    res.end(JSON.stringify({ status: "ok", deploying, ts: ts() }));
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`[${ts()}] Webhook listener on port ${PORT}`);
});
