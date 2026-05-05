"use client";

import { motion } from "framer-motion";

const ACTIONS = [
  { label: "⬆ Invest Now", variant: "primary" },
  { label: "⬇ Withdraw",   variant: "secondary" },
  { label: "+ Add Funds",  variant: "secondary" },
  { label: "⇄ Transfer",  variant: "secondary" },
] as const;

export default function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.05 }}
      className="flex flex-col sm:flex-row gap-3 mb-6"
    >
      {ACTIONS.map((action) => (
        <button
          key={action.label}
          className={`
            flex-1 py-3.5 rounded-[14px]  text-[13px] font-bold border-none
            cursor-pointer transition-all duration-200 flex items-center justify-center gap-2
            ${action.variant === "primary"
              ? "bg-gradient-to-br from-nova-neon to-nova-mid text-nova-deep hover:opacity-90 hover:-translate-y-px"
              : "bg-nova-card border border-nova-border text-nova-textPrimary hover:border-nova-neon hover:text-nova-neon"
            }
          `}
        >
          {action.label}
        </button>
      ))}
    </motion.div>
  );
}
