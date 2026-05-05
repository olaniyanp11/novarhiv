"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { NAV_ITEMS } from "@/lib/data";
import { getInitials, getDisplayName } from "@/lib/auth";
import Image from "next/image";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ open = false, onClose }: SidebarProps) {
  const { user } = useAuth();
  const pathname = usePathname();

  const sections = [
    { label: "Main",     items: NAV_ITEMS.filter((n) => n.section === "main")     },
    { label: "Insights", items: NAV_ITEMS.filter((n) => n.section === "insights") },
    { label: "Account",  items: NAV_ITEMS.filter((n) => n.section === "account")  },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-[100] w-[220px] transform transition-transform duration-300 ease-in-out bg-nova-card border-r border-nova-border flex flex-col overflow-y-auto ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:h-screen`}>
      <div className="flex items-center justify-between px-5 py-4 border-b border-nova-border md:hidden">
        <div className="text-lg font-bold text-nova-textPrimary">Nova</div>
        <button
          type="button"
          onClick={onClose}
          className="w-10 h-10 rounded-[10px] bg-nova-surface border border-nova-border text-nova-textSecondary hover:text-nova-neon"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      <div className="px-5 py-6 border-b border-nova-border">
        <Image src="/images/logo.png" alt="Nova" width={200} height={200} />
      </div>

      <nav className="flex-1 py-4">
        {sections.map((section) => (
          <div key={section.label}>
            <div className="text-[10px] text-nova-textMuted uppercase tracking-[2px] px-5 pt-2 pb-1.5">
              {section.label}
            </div>
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`w-full flex items-center gap-3 px-5 py-2.5 text-[14px] font-medium border-l-[3px] transition-all duration-200 cursor-pointer text-left ${isActive ? "border-nova-neon bg-nova-neon/[0.08] text-nova-neon" : "border-transparent text-nova-textSecondary hover:bg-nova-surface hover:text-nova-textPrimary"}`}
                >
                  <span className="text-base w-5 text-center">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {user && (
        <div className="px-5 py-4 border-t border-nova-border">
          <div className="flex items-center gap-2.5 p-2.5 rounded-[10px] cursor-pointer hover:bg-nova-surface transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nova-neon to-nova-mid flex items-center justify-center text-xs font-bold text-nova-deep flex-shrink-0">
              {getInitials(user.email)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-nova-textPrimary truncate">
                {getDisplayName(user.email)}
              </div>
              <div className="text-[11px] text-nova-textMuted">Investor</div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
