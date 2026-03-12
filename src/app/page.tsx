import DashboardHeader from "@/components/dashboard-header";
import StatsGrid from "@/components/stats-grid";
import ActiveAgents from "@/components/active-agents";
import RecentActivity from "@/components/recent-activity";
import SystemStatus from "@/components/system-status";
import QuickActions from "@/components/quick-actions";

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Header with welcome and date */}
      <DashboardHeader />
      
      {/* Quick Actions Bar */}
      <QuickActions />
      
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsGrid />
      </div>
      
      {/* Main Content Area */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Active Agents */}
        <ActiveAgents />
        
        {/* Recent Activity */}
        <RecentActivity />
      </div>
      
      {/* System Status */}
      <SystemStatus />
    </div>
  );
}