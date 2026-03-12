"use client";

import { Calendar, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function DateTimeDisplay() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Initialize with current date/time
    const now = new Date();
    
    setCurrentDate(now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }));
    
    setCurrentTime(now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }));

    // Update time every minute (not every second to reduce updates)
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm shadow-sm">
      <Calendar className="h-4 w-4 text-gray-500" />
      <span className="text-gray-700">{currentDate}</span>
      <div className="mx-2 h-4 w-px bg-gray-300"></div>
      <Clock className="h-4 w-4 text-gray-500" />
      <span className="text-gray-700">{currentTime}</span>
    </div>
  );
}