"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

import AppShell from "@/components/AppShell";
import LoginModal from "@/components/LoginModal";
import GreetingBar from "@/components/GreetingBar";
import QuickActions from "@/components/QuickActions";
import DashboardCards from "@/components/DashboardCards";
import { PortfolioChart, BreakdownChart } from "@/components/Charts";
import TransactionsTable from "@/components/TransactionsTable";
import InvestmentPlans from "@/components/InvestmentPlans";
import Insights from "@/components/Insights";

export default function DashboardPage() {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
      setModalOpen(!user?.email)
  })

  return (
    <AppShell onOpenLogin={() => setModalOpen(true)}>
      <main className="flex-1 px-4 py-5 sm:px-7 sm:py-6 overflow-y-auto">
          {/* Greeting */}
          <GreetingBar user={user} />

          {/* Quick actions */}
          <QuickActions />

          {/* Stat cards */}
          <DashboardCards />

          {/* Charts row */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.7fr_1fr] gap-4 mb-6">
            <PortfolioChart />
            <BreakdownChart />
          </div>

          {/* Transactions + Plans */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-4 mb-6">
            <TransactionsTable />
            <InvestmentPlans />
          </div>

          {/* Insights */}
          <Insights />
        </main>
      <LoginModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </AppShell>
  );
}