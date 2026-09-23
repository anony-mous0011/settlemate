"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import "./get-started.css";

function GetStartedContent() {
  const searchParams = useSearchParams();
  const side = searchParams.get("side"); // e.g. "place"

  return (
    <div className="get-started-page">
      <header className="get-started-header">
        <Link href="/" className="get-started-brand">
          <div className="get-started-logo-wrapper">
            <Image
              src="/logo -bg.png"
              alt="SettleMate Logo"
              width={64}
              height={50}
              className="get-started-logo-image"
              priority
            />
          </div>
          <span className="get-started-brand-title">
            Settle<span className="get-started-brand-dot">·</span>Mate
          </span>
        </Link>
        <Link href="/login" className="get-started-login-link">
          Already have an account? <strong>Log in</strong>
        </Link>
      </header>

      <main className="get-started-container">
        <div className="get-started-intro">
          <span className="get-started-eyebrow">Join SettleMate</span>
          <h1 className="get-started-title">What brings you here?</h1>
          <p className="get-started-subtitle">
            Choose how you want to use SettleMate so we can personalize your experience from day one.
          </p>
        </div>

        <div className="get-started-cards">
          {/* Card 1: Relocator */}
          <div className={`role-card ${side !== "place" ? "highlight-default" : ""}`}>
            <div className="role-card-header">
              <div className="role-icon-box relocator">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <span className="role-badge">Moving Soon</span>
            </div>

            <h2 className="role-title">I&rsquo;m moving to a new city</h2>
            <p className="role-desc">
              Find people to live with and places that fit your move. Match with compatible roommates, split rent, and connect safely.
            </p>

            <div className="role-perks">
              <span className="role-perk-item">✓ Lifestyle &amp; budget matching</span>
              <span className="role-perk-item">✓ Mutual consent chat</span>
              <span className="role-perk-item">✓ Verified flats &amp; PGs</span>
            </div>

            <Link href="/signup?role=relocator" className="role-btn-primary">
              Continue as a Relocator →
            </Link>
          </div>

          {/* Card 2: Place / Space (Owner & Broker) */}
          <div className={`role-card ${side === "place" ? "highlight-focused" : ""}`}>
            <div className="role-card-header">
              <div className="role-icon-box place">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="role-badge place-badge">Housing Providers</span>
            </div>

            <h2 className="role-title">I have a place to offer</h2>
            <p className="role-desc">
              List your PG, room, flat or shared accommodation and connect with people looking in your area with verified budgets.
            </p>

            <div className="role-perks">
              <span className="role-perk-item">✓ High-intent tenant enquiries</span>
              <span className="role-perk-item">✓ Synchronized move-in timelines</span>
              <span className="role-perk-item">✓ Zero spam listings</span>
            </div>

            <div className="role-multi-actions">
              <Link href="/signup?role=owner" className="role-btn-secondary">
                Continue as Owner
              </Link>
              <Link href="/signup?role=broker" className="role-btn-broker">
                Continue as Broker
              </Link>
            </div>
          </div>
        </div>

        <div className="get-started-footer">
          <p className="get-started-footer-text">
            Already have an account?{" "}
            <Link href="/login" className="get-started-footer-link">
              Log in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default function GetStartedPage() {
  return (
    <Suspense fallback={<div className="get-started-loading">Loading...</div>}>
      <GetStartedContent />
    </Suspense>
  );
}
