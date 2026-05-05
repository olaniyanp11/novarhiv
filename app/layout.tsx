import type { Metadata } from "next";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";
import Chat from "@/components/Chat";


export const metadata: Metadata = {
  title: "Novarhives — Investment Dashboard",
  description: "Secure investments for the future",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-nova-deep text-nova-textPrimary font-dm min-h-screen">
        <ClientProviders>{children}</ClientProviders>
       <Chat/>
      </body>
    </html>
  );
}
