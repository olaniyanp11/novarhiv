"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface AppShellProps {
  children: React.ReactNode;
  onOpenLogin: () => void;
}

export default function AppShell({ children, onOpenLogin }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-nova-deep md:flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 transition-all duration-300">
        <Navbar onOpenLogin={onOpenLogin} onToggleMenu={() => setSidebarOpen((value) => !value)} />
        {children}
      </div>

      {sidebarOpen && (
        <button
          type="button"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-[95] bg-black/30 md:hidden"
          aria-label="Close sidebar overlay"
        />
      )}
    </div>
  );
}
