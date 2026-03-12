"use client";

import { Server, Cpu, HardDrive, Network, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

const systemMetrics = [
  {
    name: "CPU Usage",
    icon: Cpu,
    value: 42,
    max: 100,
    unit: "%",
    status: "normal",
    description: "8 cores, 3.2GHz",
  },
  {
    name: "Memory",
    icon: HardDrive,
    value: 8.2,
    max: 16,
    unit: "GB",
    status: "normal",
    description: "DDR4 3200MHz",
  },
  {
    name: "Storage",
    icon: Server,
    value: 256,
    max: 512,
    unit: "GB",
    status: "warning",
    description: "NVMe SSD",
  },
  {
    name: "Network",
    icon: Network,
    value: 85,
    max: 100,
    unit: "Mbps",
    status: "normal",
    description: "1Gbps Ethernet",
  },
  {
    name: "Security",
    icon: Shield,
    value: 100,
    max: 100,
    unit: "%",
    status: "excellent",
    description: "All systems secure",
  },
];

export default function SystemStatus() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }));
    };
    
    // Initialize and update on client only
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-600";
      case "normal": return "text-blue-600";
      case "warning": return "text-amber-600";
      case "critical": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getProgressColor = (value: number, max: number, status: string) => {
    const percentage = (value / max) * 100;
    if (status === "excellent") return "bg-green-500";
    if (status === "warning") return "bg-amber-500";
    if (percentage > 80) return "bg-red-500";
    if (percentage > 60) return "bg-amber-500";
    return "bg-blue-500";
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">System Status</h2>
          <p className="text-sm text-gray-600">Infrastructure health and metrics</p>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="font-medium">All systems operational</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-600">{currentTime}</span>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {systemMetrics.map((metric) => (
          <div
            key={metric.name}
            className="rounded-lg border border-gray-200 p-4"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`rounded-lg p-2 ${
                  metric.status === "excellent" ? "bg-green-100" :
                  metric.status === "warning" ? "bg-amber-100" :
                  "bg-blue-100"
                }`}>
                  <metric.icon className={`h-5 w-5 ${
                    metric.status === "excellent" ? "text-green-600" :
                    metric.status === "warning" ? "text-amber-600" :
                    "text-blue-600"
                  }`} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{metric.name}</h3>
                  <p className="text-xs text-gray-500">{metric.description}</p>
                </div>
              </div>
              {metric.status === "excellent" && (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              {metric.status === "warning" && (
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              )}
            </div>
            
            <div className="space-y-2">
              <div className="flex items-end justify-between">
                <div className="text-2xl font-bold text-gray-900">
                  {metric.value}
                  <span className="text-sm font-normal text-gray-600">
                    {metric.unit}
                  </span>
                </div>
                <div className={`text-sm font-medium ${getStatusColor(metric.status)}`}>
                  {metric.status === "excellent" ? "Excellent" :
                   metric.status === "warning" ? "Monitor" : "Normal"}
                </div>
              </div>
              
              <Progress
                value={(metric.value / metric.max) * 100}
                className={`h-2 ${getProgressColor(metric.value, metric.max, metric.status)}`}
              />
              
              <div className="flex justify-between text-xs text-gray-500">
                <span>0{metric.unit}</span>
                <span>{metric.max}{metric.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-gray-50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <Server className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Server: Hetzner Cloud</p>
            <p className="text-sm text-gray-600">Frankfurt • Ubuntu 22.04 • 8 vCPU • 16GB RAM</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">99.8%</div>
            <p className="text-xs text-gray-600">Uptime (30d)</p>
          </div>
          <div className="h-8 w-px bg-gray-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">24ms</div>
            <p className="text-xs text-gray-600">Avg. latency</p>
          </div>
        </div>
      </div>
    </div>
  );
}