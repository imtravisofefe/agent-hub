import { MessageSquare, Code, Database, Shield, User, Clock, AlertCircle, CheckCircle } from "lucide-react";

const activities = [
  {
    type: "message",
    icon: MessageSquare,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    title: "New conversation started",
    description: "User asked about Next.js deployment",
    time: "2 minutes ago",
    agent: "Mustapha",
    status: "success",
  },
  {
    type: "code",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-100",
    title: "Code generation completed",
    description: "Generated API endpoint for user management",
    time: "15 minutes ago",
    agent: "Codex",
    status: "success",
  },
  {
    type: "database",
    icon: Database,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    title: "Knowledge base updated",
    description: "Added 12 new documents to training data",
    time: "1 hour ago",
    agent: "Analyst",
    status: "success",
  },
  {
    type: "security",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-100",
    title: "Security alert",
    description: "Unusual API request pattern detected",
    time: "3 hours ago",
    agent: "Guardian",
    status: "warning",
  },
  {
    type: "user",
    icon: User,
    color: "text-amber-500",
    bgColor: "bg-amber-100",
    title: "New user registered",
    description: "Team member joined the workspace",
    time: "5 hours ago",
    agent: "Travis",
    status: "success",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <p className="text-sm text-gray-600">Latest actions from your agents</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>Last 24 hours</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-lg p-3 hover:bg-gray-50"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${activity.bgColor}`}>
              <activity.icon className={`h-5 w-5 ${activity.color}`} />
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{activity.title}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </div>
                {activity.status === "warning" ? (
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
              </div>
              
              <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <span className="font-medium">{activity.agent}</span>
                  <span className="text-xs">• Agent</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-gray-600">Success</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-amber-500"></div>
              <span className="text-gray-600">Warning</span>
            </div>
          </div>
          <button className="font-medium text-blue-600 hover:text-blue-700">
            View all activity →
          </button>
        </div>
      </div>
    </div>
  );
}