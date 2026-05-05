"use client";

import { motion } from "framer-motion";
import { MOCK_INSIGHTS as INSIGHTS } from "@/lib/mockData";

export default function Insights() {
  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className=" text-[15px] font-bold text-nova-textPrimary">
          AI Insights &amp; Recommendations
        </div>
        <button className="text-[12px] text-nova-neon font-semibold hover:underline bg-transparent border-none cursor-pointer">
          Refresh →
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {INSIGHTS.map((ins, i) => (
          <motion.div
            key={ins.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
            className="bg-nova-card border border-nova-border rounded-[14px] p-4 hover:border-nova-dim transition-colors duration-200 cursor-pointer"
          >
            <div className="text-[20px] mb-2.5">{ins.icon}</div>
            <div className="text-[13px] font-semibold text-nova-textPrimary mb-1.5">
              {ins.title}
            </div>
            <div className="text-[12px] text-nova-textMuted leading-relaxed">
              {ins.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
