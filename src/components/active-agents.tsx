import { Bot, Cpu, Wifi, WifiOff, Clock, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const agents = [
  {
    name: "Mustapha",
    type: "Coding Specialist",
    status: "online",
    cpu: "42%",
    memory: "1.2GB",
    uptime: "5d 12h",
    tasks: "12 active",
    avatarColor: "bg-blue-500",
  },
  {
    name: "Travis",
    type: "General Assistant",
    status: "online",
    cpu: "28%",
    memory: "890MB",
    uptime: "7d 3h",
    tasks: "8 active",
    avatarColor: "bg-green-500",
  },
  {
    name: "Codex",
    type: "Code Generator",
    status: "offline",
    cpu: "0%",
    memory: "0MB",
    uptime: "Offline",
    tasks: "0 active",
    avatarColor: "bg-purple-500",
  },
  {
    name: "Analyst",
    type: "Data Processor",
    status: "online",
    cpu: "65%",
    memory: "2.1GB",
    uptime: "3d 8h",
    tasks: "24 active",
    avatarColor: "bg-amber-500",
  },
  {
    name: "Guardian",
    type: "Security Monitor",
    status: "online",
    cpu: "18%",
    memory: "540MB",
    uptime: "12d 6h",
    tasks: "3 active",
    avatarColor: "bg-red-500",
  },
];

export default function ActiveAgents() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Active Agents</h2>
          <p className="text-sm text-gray-600">Real-time status of your AI agents</p>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>
      
      <div className="space-y-4">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${agent.avatarColor}`}>
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-900">{agent.name}</h3>
                  <div className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                    agent.status === "online" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {agent.status === "online" ? (
                      <Wifi className="h-3 w-3" />
                    ) : (
                      <WifiOff className="h-3 w-3" />
                    )}
                    {agent.status === "online" ? "Online" : "Offline"}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{agent.type}</p>
              </div>
            </div>
            
            <div className="hidden items-center gap-6 text-sm md:flex">
              <div className="text-center">
                <div className="flex items-center gap-1 text-gray-600">
                  <Cpu className="h-4 w-4" />
                  <span className="font-medium">{agent.cpu}</span>
                </div>
                <p className="text-xs text-gray-500">CPU</p>
              </div>
              
              <div className="text-center">
                <div className="font-medium text-gray-900">{agent.memory}</div>
                <p className="text-xs text-gray-500">Memory</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">{agent.uptime}</span>
                </div>
                <p className="text-xs text-gray-500">Uptime</p>
              </div>
              
              <div className="text-center">
                <div className="font-medium text-gray-900">{agent.tasks}</div>
                <p className="text-xs text-gray-500">Tasks</p>
              </div>
            </div>
            
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}