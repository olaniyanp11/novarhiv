"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

import AppShell from "@/components/AppShell";
import LoginModal from "@/components/LoginModal";
import { BreakdownChart } from "@/components/Charts";
import HoldingsTable from "@/components/HoldingsTable";

export default function PortfolioPage() {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);



  useEffect(() => {
      setModalOpen(!user?.email)
  })
  return (
    <AppShell onOpenLogin={() => setModalOpen(true)}>
      <main className="flex-1 px-4 py-5 sm:px-7 sm:py-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-nova-textPrimary mb-2">Portfolio</h1>
            <p className="text-nova-textMuted">Overview of your investment holdings and allocations.</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
              <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                Total Value
              </div>
              <div className="text-xl font-bold text-nova-textPrimary">$284,920</div>
              <div className="text-[12px] text-green-400">▲ 8.2% this month</div>
            </div>
            <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
              <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                Top Performer
              </div>
              <div className="text-xl font-bold text-nova-textPrimary">Apple Inc.</div>
              <div className="text-[12px] text-green-400">+2.7%</div>
            </div>
            <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
              <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                Diversification
              </div>
              <div className="text-xl font-bold text-nova-textPrimary">6 Assets</div>
              <div className="text-[12px] text-nova-textMuted">4 Categories</div>
            </div>
            <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
              <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                Risk Level
              </div>
              <div className="text-xl font-bold text-nova-textPrimary">Medium</div>
              <div className="text-[12px] text-nova-textMuted">Balanced</div>
            </div>
          </div>

          {/* Charts and Holdings */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-4">
            <BreakdownChart />
            <HoldingsTable />
          </div>
        </main>
      <LoginModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </AppShell>
  );
}