"use client";

import { useState } from "react";
import {
  Home,
  Bot,
  MessageSquare,
  Database,
  Settings,
  Menu,
  X,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const mobileItems = [
  { icon: Home, label: "Dashboard" },
  { icon: Bot, label: "Agents", badge: 3 },
  { icon: MessageSquare, label: "Chats", badge: 12 },
  { icon: Database, label: "Data" },
  { icon: Bell, label: "Alerts", badge: 5 },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-4 md:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Agent Hub</h1>
            <p className="text-xs text-gray-500">v1.0.0</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 transform border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Agent Hub</h1>
              <p className="text-xs text-gray-500">v1.0.0</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="space-y-1 p-4">
          {mobileItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              <item.icon className="h-5 w-5" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-100 px-1.5 text-xs font-medium text-blue-800">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
          
          <div className="border-t border-gray-200 pt-4">
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </div>
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 z-40 flex h-16 w-full items-center justify-around border-t border-gray-200 bg-white px-4 md:hidden">
        {mobileItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex flex-col items-center justify-center gap-1 rounded-lg p-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            <div className="relative">
              <item.icon className="h-5 w-5" />
              {item.badge && (
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>
              )}
            </div>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}