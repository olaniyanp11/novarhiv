"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useAuth();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setError("");
    }
  }, [isOpen]);

  // Prevent background scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = () => {
    if (!email.trim()) { setError("Please enter your email."); return; }
    if (!email.includes("@")) { setError("Please enter a valid email."); return; }
    if (!password.trim()) { setError("Please enter your password."); return; }

    login(email.trim());
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-nova-deep/90 z-[9999] flex items-center justify-center"
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-nova-card border border-nova-borderB rounded-[20px] p-9 w-[400px] max-w-[90vw] relative"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-[8px] bg-nova-surface border border-nova-border text-nova-textSecondary hover:border-nova-neon hover:text-nova-neon flex items-center justify-center text-[18px] transition-all duration-200 cursor-pointer"
            >
              ✕
            </button>

            {/* Header */}
            <div className=" text-[22px] font-extrabold text-nova-neon text-center flex justify-center mb-1">
                 <Image src={"/images/logo.png"} alt={"Nova"} width={200} height={200}/>
           
            </div>
            <div className="text-[13px] text-nova-textMuted text-center mb-7">
              Sign in to your investment account
            </div>

            {/* Email field */}
            <div className="mb-4">
              <label className="block text-[12px] text-nova-textSecondary font-semibold uppercase tracking-[1px] mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                onKeyDown={handleKeyDown}
                placeholder="you@example.com"
                className="w-full bg-nova-surface border border-nova-border rounded-[10px] px-4 py-3 text-nova-textPrimary text-[14px] font-dm outline-none placeholder:text-nova-textMuted focus:border-nova-neon transition-colors duration-200"
              />
            </div>

            {/* Password field */}
            <div className="mb-2">
              <label className="block text-[12px] text-nova-textSecondary font-semibold uppercase tracking-[1px] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                onKeyDown={handleKeyDown}
                placeholder="Enter your password"
                className="w-full bg-nova-surface border border-nova-border rounded-[10px] px-4 py-3 text-nova-textPrimary text-[14px] font-dm outline-none placeholder:text-nova-textMuted focus:border-nova-neon transition-colors duration-200"
              />
            </div>

            {/* Error */}
            <div className="text-[12px] text-red-400 text-center min-h-[18px] mt-3">
              {error}
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full py-3.5 rounded-[12px] bg-gradient-to-br from-nova-neon to-nova-mid text-nova-deep  text-[15px] font-bold mt-5 border-none cursor-pointer hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>

            {/* Sign up text */}
            <p className="text-center text-[12px] text-nova-textMuted mt-4">
              Don&apos;t have an account?{" "}
              <span className="text-nova-neon cursor-pointer hover:underline">
                Create one free →
              </span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
