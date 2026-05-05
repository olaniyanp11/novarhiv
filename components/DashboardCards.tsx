"use client";

import { motion } from "framer-motion";
import { DASHBOARD_STATS as STAT_CARDS } from "@/lib/mockData";

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {STAT_CARDS.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="bg-nova-card border border-nova-border rounded-[16px] p-5 relative overflow-hidden hover:border-nova-dim transition-colors duration-200"
        >
          {/* Accent ring */}
          <div
            className="absolute -top-5 -right-5 w-20 h-20 rounded-full opacity-15"
            style={{ background: card.accentColor }}
          />

          {/* Icon */}
          <span className="absolute top-5 right-5 text-[22px] opacity-50">
            {card.icon}
          </span>

          <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
            {card.label}
          </div>
          <div className=" text-[26px] font-bold text-nova-textPrimary mb-2 tracking-tight">
            {card.value}
          </div>
          <span
            className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full
              ${card.up
                ? "bg-nova-neon/[0.12] text-nova-neon"
                : "bg-red-500/[0.12] text-red-400"
              }`}
          >
            {card.change}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
