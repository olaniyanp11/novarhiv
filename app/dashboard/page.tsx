"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

import Sidebar           from "@/components/Sidebar";
import Navbar            from "@/components/Navbar";
import LoginModal        from "@/components/LoginModal";
import GreetingBar       from "@/components/GreetingBar";
import QuickActions      from "@/components/QuickActions";
import DashboardCards    from "@/components/DashboardCards";
import { PortfolioChart, BreakdownChart } from "@/components/Charts";
import TransactionsTable from "@/components/TransactionsTable";
import InvestmentPlans   from "@/components/InvestmentPlans";
import Insights          from "@/components/Insights";

export default function DashboardPage() {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
      setModalOpen(!user?.email)
  })

  return (
    <div className="flex min-h-screen bg-nova-deep">
      {/* Sidebar */}
      <Sidebar />

      {/* Main column */}
      <div className="flex flex-col flex-1 ml-[220px] min-h-screen">
        {/* Navbar */}
        <Navbar onOpenLogin={() => setModalOpen(true)} />

        {/* Scrollable content */}
        <main className="flex-1 px-7 py-6 overflow-y-auto">
          {/* Greeting */}
          <GreetingBar user={user} />

          {/* Quick actions */}
          <QuickActions />

          {/* Stat cards */}
          <DashboardCards />

          {/* Charts row */}
          <div className="grid grid-cols-[1.7fr_1fr] gap-4 mb-6">
            <PortfolioChart />
            <BreakdownChart />
          </div>

          {/* Transactions + Plans */}
          <div className="grid grid-cols-[1.6fr_1fr] gap-4 mb-6">
            <TransactionsTable />
            <InvestmentPlans />
          </div>

          {/* Insights */}
          <Insights />
        </main>
      </div>

      {/* Login modal */}
      <LoginModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}