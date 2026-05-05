"use client";

import { motion } from "framer-motion";
import { MOCK_TRANSACTIONS as TRANSACTIONS } from "@/lib/mockData";

const statusStyles: Record<string, string> = {
  completed: "bg-nova-neon/10 text-nova-neon",
  pending:   "bg-yellow-400/10 text-yellow-400",
  failed:    "bg-red-500/10 text-red-400",
};

export default function TransactionsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-nova-card border border-nova-border rounded-[16px] p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className=" text-[15px] font-bold text-nova-textPrimary">
            Recent Transactions
          </div>
          <div className="text-[12px] text-nova-textMuted">Last 30 days</div>
        </div>
        <button className="text-[12px] text-nova-neon font-semibold hover:underline cursor-pointer bg-transparent border-none">
          View all →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {["Asset", "Date", "Amount", "Status"].map((h) => (
                <th
                  key={h}
                  className="text-[11px] text-nova-textMuted uppercase tracking-[1px] px-3 py-2 text-left border-b border-nova-border"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TRANSACTIONS.map((tx, i) => (
              <motion.tr
                key={tx.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                className="border-b border-nova-border/50 last:border-b-0"
              >
                {/* Asset */}
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-[8px] flex items-center justify-center text-[14px] flex-shrink-0"
                      style={{ background: tx.iconBg }}
                    >
                      {tx.icon}
                    </div>
                    <div>
                      <div className="text-[13px] font-medium text-nova-textPrimary leading-none">
                        {tx.name}
                        {tx.ticker && (
                          <span className="text-nova-textMuted ml-1">
                            ({tx.ticker})
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-nova-textMuted mt-0.5">
                        {tx.category}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Date */}
                <td className="px-3 py-3 text-[12px] text-nova-textMuted whitespace-nowrap">
                  {tx.date}
                </td>

                {/* Amount */}
                <td
                  className={`px-3 py-3 text-[13px] font-semibold whitespace-nowrap
                    ${tx.credit ? "text-nova-neon" : "text-red-400"}`}
                >
                  {tx.credit ? "+" : "-"}${tx.amount.toLocaleString()}
                </td>

                {/* Status */}
                <td className="px-3 py-3">
                  <span
                    className={`text-[11px] font-semibold px-2 py-1 rounded-full capitalize
                      ${statusStyles[tx.status]}`}
                  >
                    {tx.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
