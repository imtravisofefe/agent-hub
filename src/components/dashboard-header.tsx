"use client";

import { Calendar, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DateTimeDisplay from "./date-time-display";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Welcome back, Mustapha 👋
        </h1>
        <p className="mt-1 text-gray-600">
          Here&apos;s what&apos;s happening with your AI agents today.
        </p>
      </div>
      
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Date and Time Display */}
        <DateTimeDisplay />
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search agents, conversations..."
            className="w-full pl-9 sm:w-64"
          />
        </div>
        
        <Button className="whitespace-nowrap">New Agent</Button>
      </div>
    </div>
  );
}