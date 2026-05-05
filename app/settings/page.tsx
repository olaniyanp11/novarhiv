"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

import AppShell from "@/components/AppShell";
import LoginModal from "@/components/LoginModal";
import { MOCK_USER } from "@/lib/mockData";

export default function SettingsPage() {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
      setModalOpen(!user?.email)
  })

  return (
    <AppShell onOpenLogin={() => setModalOpen(true)}>
      <main className="flex-1 px-4 py-5 sm:px-7 sm:py-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-nova-textPrimary mb-2">Settings</h1>
            <p className="text-nova-textMuted">Manage your account preferences and profile information.</p>
          </div>

          {/* Profile Section */}
          <div className="bg-nova-card border border-nova-border rounded-[16px] p-6 mb-6">
            <h2 className="text-lg font-bold text-nova-textPrimary mb-4">Profile Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                  Full Name
                </label>
                <div className="text-nova-textPrimary">{MOCK_USER.name}</div>
              </div>
              <div>
                <label className="block text-[12px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                  Email
                </label>
                <div className="text-nova-textPrimary">{MOCK_USER.email}</div>
              </div>
              <div>
                <label className="block text-[12px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                  Member Since
                </label>
                <div className="text-nova-textPrimary">{MOCK_USER.joinedDate}</div>
              </div>
              <div>
                <label className="block text-[12px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                  Risk Tolerance
                </label>
                <div className="text-nova-textPrimary">{MOCK_USER.riskTolerance}</div>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="bg-nova-card border border-nova-border rounded-[16px] p-6">
            <h2 className="text-lg font-bold text-nova-textPrimary mb-4">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-nova-textPrimary font-medium">Email Notifications</div>
                  <div className="text-[12px] text-nova-textMuted">Receive updates on your investments</div>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors ${MOCK_USER.notifications ? 'bg-nova-neon' : 'bg-nova-border'}`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${MOCK_USER.notifications ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-nova-textPrimary font-medium">Two-Factor Authentication</div>
                  <div className="text-[12px] text-nova-textMuted">Add an extra layer of security</div>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors ${MOCK_USER.twoFactor ? 'bg-nova-neon' : 'bg-nova-border'}`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${MOCK_USER.twoFactor ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-nova-textPrimary font-medium">Auto-Invest</div>
                  <div className="text-[12px] text-nova-textMuted">Automatically reinvest dividends</div>
                </div>
                <div className="w-12 h-6 rounded-full p-1 bg-nova-neon">
                  <div className="w-4 h-4 rounded-full bg-white translate-x-6"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-nova-textPrimary font-medium">Market Alerts</div>
                  <div className="text-[12px] text-nova-textMuted">Get notified of significant market changes</div>
                </div>
                <div className="w-12 h-6 rounded-full p-1 bg-nova-border">
                  <div className="w-4 h-4 rounded-full bg-white translate-x-0"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      <LoginModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </AppShell>
  );
}