import { Plus, Zap, Download, Upload, Settings, Terminal, Database, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  {
    icon: Plus,
    label: "New Agent",
    description: "Create a new AI agent",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    icon: Zap,
    label: "Quick Train",
    description: "Train on new data",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    icon: Download,
    label: "Export Data",
    description: "Download logs & metrics",
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    icon: Upload,
    label: "Import Model",
    description: "Upload trained model",
    color: "bg-amber-500 hover:bg-amber-600",
  },
  {
    icon: Settings,
    label: "Configuration",
    description: "System settings",
    color: "bg-gray-500 hover:bg-gray-600",
  },
  {
    icon: Terminal,
    label: "API Console",
    description: "Test API endpoints",
    color: "bg-indigo-500 hover:bg-indigo-600",
  },
  {
    icon: Database,
    label: "Backup",
    description: "Create system backup",
    color: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    icon: Shield,
    label: "Security Scan",
    description: "Run security audit",
    color: "bg-red-500 hover:bg-red-600",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
        <p className="text-sm text-gray-600">Frequently used operations</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {actions.map((action) => (
          <Button
            key={action.label}
            className={`group flex h-auto flex-col items-center justify-center gap-2 rounded-lg p-4 text-white transition-all hover:scale-105 ${action.color}`}
          >
            <action.icon className="h-6 w-6" />
            <div className="text-center">
              <div className="text-sm font-medium">{action.label}</div>
              <div className="text-xs opacity-90">{action.description}</div>
            </div>
          </Button>
        ))}
      </div>
      
      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Need help with a specific task? <span className="font-medium text-blue-600">Contact support</span>
          </div>
          <Button variant="outline" size="sm">
            View All Actions
          </Button>
        </div>
      </div>
    </div>
  );
}