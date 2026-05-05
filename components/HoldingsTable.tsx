"use client";

import { motion } from "framer-motion";
import { MOCK_HOLDINGS } from "@/lib/mockData";

export default function HoldingsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-nova-card border border-nova-border rounded-[16px] p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-[15px] font-bold text-nova-textPrimary">
          Holdings
        </div>
      </div>

      <div className="space-y-3">
        {MOCK_HOLDINGS.map((holding) => (
          <div
            key={holding.id}
            className="flex items-center justify-between p-4 bg-nova-surface rounded-[12px] hover:bg-nova-surface/80 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ background: `rgba(57,255,139,0.1)` }}
              >
                {holding.icon}
              </div>
              <div>
                <div className="text-[14px] font-semibold text-nova-textPrimary">
                  {holding.name}
                </div>
                <div className="text-[12px] text-nova-textMuted">
                  {holding.ticker} • {holding.category}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-[14px] font-semibold text-nova-textPrimary">
                ${holding.value.toLocaleString()}
              </div>
              <div className={`text-[12px] ${holding.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {holding.change >= 0 ? '+' : ''}${holding.change} ({holding.changePercent >= 0 ? '+' : ''}{holding.changePercent}%)
              </div>
            </div>

            <div className="text-right">
              <div className="text-[14px] font-semibold text-nova-textPrimary">
                {holding.allocation}%
              </div>
              <div className="text-[12px] text-nova-textMuted">Allocation</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}