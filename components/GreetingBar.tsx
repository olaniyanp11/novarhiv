"use client";

import { motion } from "framer-motion";
import { NovaUser, getDisplayName } from "@/lib/auth";

interface GreetingBarProps {
  user: NovaUser | null;
}

export default function GreetingBar({ user }: GreetingBarProps) {
  const name = user ? getDisplayName(user.email) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-between mb-6 px-6 py-5 bg-nova-card border border-nova-border rounded-[16px]"
    >
      <div>
        <h2 className=" text-[42px] font-extrabold text-nova-textPrimary">
          {name ? `Welcome back, ${name}!` : "Welcome to Novarhives"}
        </h2>
        <p className="text-[13px] text-nova-textMuted mt-1 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-nova-neon animate-pulseDot" />
          Markets are up today — your portfolio gained +2.3%
        </p>
      </div>
      <div className="text-right">
        <div className="text-[11px] text-nova-textMuted uppercase tracking-[1px] mb-0.5">
          Portfolio Value
        </div>
        <div className=" text-[20px] font-bold text-nova-neon">
          $284,920
        </div>
      </div>
    </motion.div>
  );
}
