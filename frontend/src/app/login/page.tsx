"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { UserRole, loginUser, DEFAULT_USERS } from "@/lib/auth";
import "./login.css";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialRoleParam = (searchParams.get("role") as UserRole) || "relocator";

  const [role, setRole] = useState<UserRole>(
    ["relocator", "owner", "broker"].includes(initialRoleParam)
      ? initialRoleParam
      : "relocator"
  );
  const [email, setEmail] = useState(DEFAULT_USERS[role]?.email || "");
  const [password, setPassword] = useState("••••••••");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSubmitted, setForgotSubmitted] = useState(false);

  const handleRoleChange = (newRole: UserRole) => {
    setRole(newRole);
    setEmail(DEFAULT_USERS[newRole]?.email || "");
    setErrorMessage("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    setLoading(true);
    try {
      const result = await loginUser(email, password, role);
      if (result.success) {
        router.push(result.redirectUrl);
      } else {
        setErrorMessage("Authentication failed. Please check your credentials.");
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotSubmitted(true);
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <Link href="/" className="login-brand">
          <div className="login-logo-wrapper">
            <Image
              src="/logo -bg.png"
              alt="SettleMate Logo"
              width={64}
              height={50}
              className="login-logo-image"
              priority
            />
          </div>
          <span className="login-brand-title">
            Settle<span className="login-brand-dot">·</span>Mate
          </span>
        </Link>
        <Link href="/get-started" className="login-signup-link">
          Don&rsquo;t have an account? <strong>Get started</strong>
        </Link>
      </header>

      <main className="login-container">
        <div className="login-card">
          <div className="login-card-header">
            <h1 className="login-title">Welcome back</h1>
            <p className="login-subtitle">
              Sign in to manage your moves, roommates, or property listings.
            </p>
          </div>

          {/* Account Role Switcher for instant login / role testing */}
          <div className="login-role-selector">
            <span className="login-role-label">Signing in as:</span>
            <div className="login-role-pills">
              <button
                type="button"
                className={`login-role-pill ${role === "relocator" ? "active" : ""}`}
                onClick={() => handleRoleChange("relocator")}
              >
                Relocator
              </button>
              <button
                type="button"
                className={`login-role-pill ${role === "owner" ? "active" : ""}`}
                onClick={() => handleRoleChange("owner")}
              >
                Owner
              </button>
              <button
                type="button"
                className={`login-role-pill ${role === "broker" ? "active" : ""}`}
                onClick={() => handleRoleChange("broker")}
              >
                Broker
              </button>
            </div>
          </div>

          {errorMessage && <div className="login-error-alert">{errorMessage}</div>}

          <form onSubmit={handleLogin} className="login-form">
            <div className="login-field">
              <label htmlFor="login-email" className="login-field-label">
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                className="login-input"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="login-field">
              <div className="login-field-row">
                <label htmlFor="login-password" className="login-field-label">
                  Password
                </label>
                <button
                  type="button"
                  className="login-forgot-btn"
                  onClick={() => {
                    setForgotEmail(email);
                    setForgotSubmitted(false);
                    setForgotModalOpen(true);
                  }}
                >
                  Forgot password?
                </button>
              </div>
              <input
                id="login-password"
                type="password"
                className="login-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              className="login-submit-btn"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Log in"}
            </button>
          </form>

          <div className="login-card-footer">
            <p className="login-footer-text">
              Don&rsquo;t have an account?{" "}
              <Link href="/get-started" className="login-footer-link">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div className="modal-backdrop" onClick={() => setForgotModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3 className="modal-title">Reset your password</h3>
              <button
                className="modal-close-btn"
                onClick={() => setForgotModalOpen(false)}
              >
                ✕
              </button>
            </div>

            {!forgotSubmitted ? (
              <form onSubmit={handleForgotSubmit} className="modal-form">
                <p className="modal-desc">
                  Enter your email address and we&rsquo;ll send you instructions to reset your password.
                </p>
                <input
                  type="email"
                  className="login-input"
                  placeholder="name@example.com"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                />
                <div className="modal-actions">
                  <button
                    type="button"
                    className="modal-cancel-btn"
                    onClick={() => setForgotModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="login-submit-btn">
                    Send Reset Link
                  </button>
                </div>
              </form>
            ) : (
              <div className="modal-success">
                <div className="modal-success-icon">✓</div>
                <h4 className="modal-success-title">Reset Link Sent</h4>
                <p className="modal-desc">
                  If an account exists for <strong>{forgotEmail}</strong>, password reset instructions have been dispatched.
                </p>
                <button
                  type="button"
                  className="login-submit-btn"
                  onClick={() => setForgotModalOpen(false)}
                >
                  Back to Log in
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="login-loading">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
