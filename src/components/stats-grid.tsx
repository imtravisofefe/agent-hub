import { Bot, MessageSquare, Database, BarChart3, TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  {
    title: "Active Agents",
    value: "8",
    change: "+2",
    trend: "up",
    icon: Bot,
    color: "bg-blue-500",
    description: "Running instances",
  },
  {
    title: "Total Messages",
    value: "1,247",
    change: "+12%",
    trend: "up",
    icon: MessageSquare,
    color: "bg-green-500",
    description: "Last 24 hours",
  },
  {
    title: "Knowledge Items",
    value: "4,892",
    change: "-3%",
    trend: "down",
    icon: Database,
    color: "bg-purple-500",
    description: "In database",
  },
  {
    title: "Avg Response Time",
    value: "1.2s",
    change: "-0.4s",
    trend: "up",
    icon: BarChart3,
    color: "bg-amber-500",
    description: "Faster than yesterday",
  },
];

export default function StatsGrid() {
  return (
    <>
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <div className="mt-2 flex items-baseline gap-2">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <div className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                  stat.trend === "up" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {stat.change}
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
            </div>
            <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.color}`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}