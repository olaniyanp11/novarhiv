"use client";

import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { getInitials } from "@/lib/auth";

interface NavbarProps {
  onOpenLogin: () => void;
}

export default function Navbar({ onOpenLogin }: NavbarProps) {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dateStr = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="bg-nova-card border-b border-nova-border px-7 h-16 flex items-center gap-4 sticky top-0 z-[90]">
      {/* Page title */}
      <h1 className=" text-[18px] font-bold text-nova-textPrimary flex-1">
        Dashboard
      </h1>

      {/* Search */}
      <div className="flex items-center gap-2 bg-nova-surface border border-nova-border rounded-[10px] px-3.5 py-2 w-[220px]">
        <span className="text-nova-textMuted text-[14px]">🔍</span>
        <input
          type="text"
          placeholder="Search assets, stocks..."
          className="bg-transparent border-none outline-none text-nova-textPrimary text-[13px] font-dm w-full placeholder:text-nova-textMuted"
        />
      </div>

      {/* Date badge */}
      <div className="text-[12px] text-nova-textMuted bg-nova-surface border border-nova-border px-3 py-1 rounded-full">
        {dateStr}
      </div>

      {/* Notifications */}
      <button className="w-[38px] h-[38px] rounded-[10px] bg-nova-surface border border-nova-border flex items-center justify-center cursor-pointer transition-all duration-200 text-[16px] text-nova-textSecondary relative hover:border-nova-neon hover:text-nova-neon">
        🔔
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-nova-neon rounded-full text-[9px] font-bold text-nova-deep flex items-center justify-center">
          3
        </span>
      </button>

      {/* Auth area */}
      {user ? (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((o) => !o)}
            className="flex items-center gap-2 bg-nova-surface border border-nova-border rounded-[10px] px-3 py-1.5 cursor-pointer hover:border-nova-neon transition-all duration-200"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-nova-neon to-nova-mid flex items-center justify-center text-[11px] font-bold text-nova-deep">
              {getInitials(user.email)}
            </div>
            <span className="text-[12px] text-nova-textSecondary max-w-[140px] overflow-hidden text-ellipsis whitespace-nowrap">
              {user.email}
            </span>
            <span className="text-nova-textMuted text-[12px]">▾</span>
          </button>

          {dropdownOpen && (
            <div className="absolute top-[calc(100%+8px)] right-0 bg-nova-card border border-nova-border rounded-[10px] min-w-[160px] z-[200] overflow-hidden shadow-lg">
              <button className="w-full text-left px-4 py-2.5 text-[13px] text-nova-textSecondary hover:bg-nova-surface hover:text-nova-textPrimary transition-colors">
                👤 Profile
              </button>
              <button className="w-full text-left px-4 py-2.5 text-[13px] text-nova-textSecondary hover:bg-nova-surface hover:text-nova-textPrimary transition-colors">
                ⚙ Settings
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2.5 text-[13px] text-red-400 hover:bg-red-500/10 transition-colors"
              >
                → Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={onOpenLogin}
          className="bg-gradient-to-br from-nova-neon to-nova-mid text-nova-deep px-5 py-2 rounded-[10px] text-[13px] font-bold  hover:opacity-90 transition-opacity border-none cursor-pointer"
        >
          Login
        </button>
      )}
    </header>
  );
}
