"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import LoginModal from "@/components/LoginModal";
import TransactionsTable from "@/components/TransactionsTable";

export default function TransactionsPage() {
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
            <h1 className="text-2xl font-bold text-nova-textPrimary mb-2">Transactions</h1>
            <p className="text-nova-textMuted">View and track all your investment transactions.</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
              <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                Total Transactions
              </div>
              <div className="text-xl font-bold text-nova-textPrimary">247</div>
              <div className="text-[12px] text-nova-textMuted">This year</div>
            </div>
            <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
              <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                Completed
              </div>
              <div className="text-xl font-bold text-nova-textPrimary">234</div>
              <div className="text-[12px] text-green-400">94.7%</div>
            </div>
            <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
              <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                Pending
              </div>
              <div className="text-xl font-bold text-nova-textPrimary">8</div>
              <div className="text-[12px] text-yellow-400">3.2%</div>
            </div>
            <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
              <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                Failed
              </div>
              <div className="text-xl font-bold text-nova-textPrimary">5</div>
              <div className="text-[12px] text-red-400">2.1%</div>
            </div>
          </div>

          {/* Transactions Table */}
          <TransactionsTable />
        </main>
      </div>

      <LoginModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}