"use client";

import React, { useState } from "react";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import "./Hero.css";

const heroProfiles: Record<
  string,
  {
    name: string;
    locality: string;
    timeline: string;
    budget: string;
    match: number;
    tags: string[];
    role: string;
  }
> = {
  All: {
    name: "Aditi",
    locality: "Kharadi",
    timeline: "October 2026",
    budget: "₹12k–15k/mo",
    match: 94,
    tags: ["Study-focused", "Non-smoker", "Early riser"],
    role: "Preparing for UPSC",
  },
  Kharadi: {
    name: "Aditi",
    locality: "Kharadi",
    timeline: "October 2026",
    budget: "₹12k–15k/mo",
    match: 94,
    tags: ["Study-focused", "Non-smoker", "Vegetarian"],
    role: "Preparing for UPSC",
  },
  "Viman Nagar": {
    name: "Karan",
    locality: "Viman Nagar",
    timeline: "October 2026",
    budget: "₹13k–16k/mo",
    match: 91,
    tags: ["Quiet home", "Neat freak", "Software Eng."],
    role: "Developer @ EON",
  },
  Hinjawadi: {
    name: "Meera",
    locality: "Hinjawadi Phase 1",
    timeline: "November 2026",
    budget: "₹11k–14k/mo",
    match: 88,
    tags: ["Pet friendly", "Coffee lover", "WFH"],
    role: "UX Researcher",
  },
};

export default function Hero() {
  const [selectedLocality, setSelectedLocality] = useState("All");
  const activeProfile = heroProfiles[selectedLocality] || heroProfiles.All;

  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* Left Side: Pitch & CTAs */}
        <div>
          <Eyebrow>Moving to a new city?</Eyebrow>
          <h1 className="hero-heading">
            Find your people.
            <br />
            <span className="hero-highlight">Find your place.</span>
          </h1>
          <p className="hero-subtext">
            Start with your relocation profile — destination, timeline, and living habits. SettleMate connects you with compatible people moving your way, then helps you secure the perfect flat together.
          </p>

          <div className="hero-actions">
            <a href="#move" className="hero-btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
              Start your move
            </a>
            <a href="#discover" className="hero-btn-secondary">
              Explore roommates
            </a>
          </div>

          <div className="hero-social-proof">
            <div className="hero-avatar-stack">
              <div className="hero-stack-avatar" style={{ backgroundColor: "#0284c7" }}>AR</div>
              <div className="hero-stack-avatar" style={{ backgroundColor: "#059669" }}>KM</div>
              <div className="hero-stack-avatar" style={{ backgroundColor: "#7c3aed" }}>MS</div>
              <div className="hero-stack-avatar" style={{ backgroundColor: "#d97706" }}>RK</div>
            </div>
            <div className="hero-social-text">
              Over <strong>1,400+ movers</strong> connecting this month
            </div>
          </div>
        </div>

        {/* Right Side: Realistic SettleMate Discovery Experience */}
        <div className="hero-discovery-card">
          <div className="hero-discovery-radar" />

          <div className="hero-discovery-header">
            <div className="hero-discovery-title-group">
              <span className="hero-discovery-city">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent, #3d7a68)" strokeWidth={2.2}>
                  <path d="M12 21s-7-4.5-7-10.5A7 7 0 0112 3a7 7 0 017 7.5C19 16.5 12 21 12 21z" />
                  <circle cx="12" cy="10.5" r="2.2" />
                </svg>
                Movers in Pune
              </span>
              <span className="hero-discovery-sub">Filtered by compatibility &amp; budget</span>
            </div>
            <span className="hero-live-match">Live Activity</span>
          </div>

          <div className="hero-locality-filter">
            {["All", "Kharadi", "Viman Nagar", "Hinjawadi"].map((loc) => (
              <button
                key={loc}
                className={`hero-locality-btn ${selectedLocality === loc ? "active" : ""}`}
                onClick={() => setSelectedLocality(loc)}
              >
                {loc}
              </button>
            ))}
          </div>

          <div className="hero-live-card-preview">
            <div className="hero-live-top">
              <div className="hero-live-user">
                <div className="hero-live-avatar">
                  {activeProfile.name.slice(0, 2).toUpperCase()}
                  <span className="hero-live-dot" />
                </div>
                <div>
                  <div className="hero-live-name">{activeProfile.name}</div>
                  <div className="hero-live-detail">
                    📍 {activeProfile.locality} · {activeProfile.role}
                  </div>
                </div>
              </div>
              <div className="hero-live-match">
                {activeProfile.match}% Match
              </div>
            </div>

            <div className="hero-live-tags">
              {activeProfile.tags.map((t) => (
                <span key={t} className="hero-live-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="hero-live-bottom">
              <div>
                <div style={{ fontSize: "0.72rem", color: "#6e6a62" }}>Target Budget</div>
                <div className="hero-live-budget">{activeProfile.budget}</div>
              </div>
              <button className="hero-live-btn">
                Connect →
              </button>
            </div>
          </div>

          <div className="hero-live-nearby-bar">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            18 compatible people moving to {selectedLocality === "All" ? "Pune" : selectedLocality}
          </div>
        </div>
      </div>
    </section>
  );
}
