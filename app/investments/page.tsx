"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import LoginModal from "@/components/LoginModal";
import InvestmentPlans from "@/components/InvestmentPlans";

export default function InvestmentsPage() {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
      setModalOpen(!user?.email)
  })

  return (
    <div className="flex min-h-screen bg-nova-deep">
      <Sidebar />

      <div className="flex flex-col flex-1 ml-[220px] min-h-screen">
        <Navbar onOpenLogin={() => setModalOpen(true)} />

        <main className="flex-1 px-7 py-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-nova-textPrimary mb-2">Investments</h1>
            <p className="text-nova-textMuted">Manage your active investment plans and track progress.</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
              <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                Active Plans
              </div>
              <div className="text-xl font-bold text-nova-textPrimary">4</div>
              <div className="text-[12px] text-nova-textMuted">3 growing</div>
            </div>
            <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
              <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                Total Invested
              </div>
              <div className="text-xl font-bold text-nova-textPrimary">$125,000</div>
              <div className="text-[12px] text-green-400">▲ 15.2% YTD</div>
            </div>
            <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
              <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                Avg. Return
              </div>
              <div className="text-xl font-bold text-nova-textPrimary">18.5%</div>
              <div className="text-[12px] text-nova-textMuted">Annual</div>
            </div>
            <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
              <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                Next Milestone
              </div>
              <div className="text-xl font-bold text-nova-textPrimary">2 Weeks</div>
              <div className="text-[12px] text-nova-textMuted">Crypto Shield</div>
            </div>
          </div>

          {/* Active Plans */}
          <InvestmentPlans />
        </main>
      </div>

      <LoginModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}