"use client";

import { motion } from "framer-motion";
import { MOCK_PLANS as PLANS } from "@/lib/mockData";

export default function InvestmentPlans() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between mb-2">
        <div className=" text-[15px] font-bold text-nova-textPrimary">
          Active Plans
        </div>
        <button className="text-[12px] text-nova-neon font-semibold hover:underline bg-transparent border-none cursor-pointer">
          Manage →
        </button>
      </div>

      {PLANS.map((plan, i) => {
        const pct = Math.round((plan.reached / plan.target) * 100);
        return (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            className="bg-nova-card border border-nova-border rounded-[16px] p-4 hover:border-nova-dim transition-colors duration-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className=" text-[14px] font-bold text-nova-textPrimary">
                {plan.name}
              </div>
              <span
                className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                style={{ color: plan.tierColor, background: plan.tierBg }}
              >
                {plan.tier}
              </span>
            </div>

            {/* Meta */}
            <div className="flex justify-between text-[12px] text-nova-textMuted mb-2.5">
              <span>Target: ${plan.target.toLocaleString()}</span>
              <span className="text-nova-textSecondary">
                ${plan.reached.toLocaleString()} reached
              </span>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 bg-nova-surface rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #1db954, #39ff8b)",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              />
            </div>

            <div className="text-[11px] text-nova-textMuted mt-1.5">
              {pct}% complete · {plan.monthsLeft} months left
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
