"use client";

import { useState } from "react";
import {
  Home,
  Bot,
  MessageSquare,
  Database,
  Settings,
  BarChart3,
  Users,
  FileText,
  Globe,
  Server,
  Bell,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: Home, label: "Dashboard", href: "#" },
  { icon: Bot, label: "Agents", href: "#", badge: 3 },
  { icon: MessageSquare, label: "Conversations", href: "#", badge: 12 },
  { icon: Database, label: "Knowledge Base", href: "#" },
  { icon: BarChart3, label: "Analytics", href: "#" },
  { icon: Users, label: "Team", href: "#" },
  { icon: FileText, label: "Documents", href: "#" },
  { icon: Globe, label: "Integrations", href: "#" },
  { icon: Server, label: "Infrastructure", href: "#" },
];

const bottomItems = [
  { icon: Bell, label: "Notifications", href: "#", badge: 5 },
  { icon: Settings, label: "Settings", href: "#" },
  { icon: HelpCircle, label: "Help & Support", href: "#" },
];

export default function Sidebar() {
  // Default to non-collapsed for consistent server/client rendering
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-gray-200 bg-white md:flex">
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <Bot className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Agent Hub</h1>
              <p className="text-xs text-gray-500">v1.0.0</p>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        <div className="mb-4">
          {!collapsed && (
            <p className="px-3 text-xs font-medium uppercase text-gray-500">
              Main
            </p>
          )}
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-100 px-1.5 text-xs font-medium text-blue-800">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-4">
          {!collapsed && (
            <p className="px-3 text-xs font-medium uppercase text-gray-500">
              System
            </p>
          )}
          <ul className="space-y-1">
            {bottomItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-100 px-1.5 text-xs font-medium text-red-800">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* User Profile */}
      {!collapsed && (
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Mustapha</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}