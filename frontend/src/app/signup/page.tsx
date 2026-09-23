"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { UserRole, registerUser } from "@/lib/auth";
import "./signup.css";

const ROLE_INFO: Record<
  UserRole,
  { label: string; tag: string; description: string }
> = {
  relocator: {
    label: "Relocator",
    tag: "Moving to a city",
    description: "Looking for roommates, shared flats, and verified places.",
  },
  owner: {
    label: "Property Owner",
    tag: "Offering places",
    description: "Listing flats, rooms, or PGs directly to verified movers.",
  },
  broker: {
    label: "Broker / Consultant",
    tag: "Commercial / Multi-inventory",
    description: "Managing listings and connecting client requirements.",
  },
};

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialRoleParam = (searchParams.get("role") as UserRole) || "relocator";

  const [role, setRole] = useState<UserRole>(
    ["relocator", "owner", "broker"].includes(initialRoleParam)
      ? initialRoleParam
      : "relocator"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage("Please enter a password with at least 6 characters.");
      return;
    }
    if (!agreeTerms) {
      setErrorMessage("Please accept the Terms of Service to continue.");
      return;
    }

    setLoading(true);
    try {
      const result = await registerUser({
        name,
        email,
        password,
        role,
        phone,
      });
      if (result.success) {
        router.push(result.redirectUrl);
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <header className="signup-header">
        <Link href="/" className="signup-brand">
          <div className="signup-logo-wrapper">
            <Image
              src="/logo -bg.png"
              alt="SettleMate Logo"
              width={64}
              height={50}
              className="signup-logo-image"
              priority
            />
          </div>
          <span className="signup-brand-title">
            Settle<span className="signup-brand-dot">·</span>Mate
          </span>
        </Link>
        <Link href="/login" className="signup-login-link">
          Already have an account? <strong>Log in</strong>
        </Link>
      </header>

      <main className="signup-container">
        <div className="signup-card">
          <div className="signup-card-header">
            <span className="signup-eyebrow">Create Account</span>
            <h1 className="signup-title">Join SettleMate</h1>
            <p className="signup-subtitle">
              {ROLE_INFO[role].description}
            </p>
          </div>

          {/* Role Pill Switcher */}
          <div className="signup-role-selector">
            <div className="signup-role-pills">
              <button
                type="button"
                className={`signup-role-pill ${role === "relocator" ? "active" : ""}`}
                onClick={() => setRole("relocator")}
              >
                Relocator
              </button>
              <button
                type="button"
                className={`signup-role-pill ${role === "owner" ? "active" : ""}`}
                onClick={() => setRole("owner")}
              >
                Owner
              </button>
              <button
                type="button"
                className={`signup-role-pill ${role === "broker" ? "active" : ""}`}
                onClick={() => setRole("broker")}
              >
                Broker
              </button>
            </div>
          </div>

          {errorMessage && <div className="signup-error-alert">{errorMessage}</div>}

          <form onSubmit={handleSignup} className="signup-form">
            <div className="signup-field">
              <label htmlFor="signup-name" className="signup-field-label">
                Full name
              </label>
              <input
                id="signup-name"
                type="text"
                className="signup-input"
                placeholder="e.g. Aditi Rao"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>

            <div className="signup-field">
              <label htmlFor="signup-email" className="signup-field-label">
                Email address
              </label>
              <input
                id="signup-email"
                type="email"
                className="signup-input"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="signup-field">
              <label htmlFor="signup-phone" className="signup-field-label">
                Mobile number <span className="optional-tag">(optional)</span>
              </label>
              <input
                id="signup-phone"
                type="tel"
                className="signup-input"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
              />
            </div>

            <div className="signup-field">
              <label htmlFor="signup-password" className="signup-field-label">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                className="signup-input"
                placeholder="Create a strong password (min 6 chars)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>

            <label className="signup-checkbox-label">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="signup-checkbox"
              />
              <span>
                I agree to the <Link href="/#trust" className="terms-link">Terms of Service</Link> and{" "}
                <Link href="/#trust" className="terms-link">Community Guidelines</Link>
              </span>
            </label>

            <button
              type="submit"
              className="signup-submit-btn"
              disabled={loading}
            >
              {loading
                ? "Creating account..."
                : `Continue as ${role === "relocator" ? "Relocator" : role === "owner" ? "Owner" : "Broker"}`}
            </button>
          </form>

          <div className="signup-card-footer">
            <p className="signup-footer-text">
              Already registered?{" "}
              <Link href="/login" className="signup-footer-link">
                Log in to your account
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="signup-loading">Loading...</div>}>
      <SignupForm />
    </Suspense>
  );
}
