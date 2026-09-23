"use client";

import React from "react";
import "./owner-profile.css";

export default function OwnerProfilePage() {
  return (
    <div className="owner-profile-wrap">
      <div>
        <h1 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.85rem", fontWeight: 500, color: "var(--navy, #121b2d)" }}>
          Owner Profile &amp; Contact Preferences
        </h1>
        <p style={{ fontSize: "0.92rem", color: "var(--text-muted, #6e6a62)", marginTop: "0.2rem" }}>
          Manage your verified property owner credentials and notification preferences.
        </p>
      </div>

      <div className="owner-profile-card">
        <div className="owner-profile-header">
          <div className="owner-avatar-large">RK</div>
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--navy, #121b2d)" }}>
              Rajesh Kulkarni
            </h2>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted, #6e6a62)", marginTop: "0.15rem" }}>
              Individual Property Owner · Pune (Kharadi &amp; Viman Nagar)
            </p>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy, #121b2d)", marginBottom: "0.5rem" }}>
            Owner Bio &amp; Tenant Criteria
          </h3>
          <p style={{ fontSize: "0.92rem", color: "#334155", lineHeight: 1.6, backgroundColor: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", border: "1px solid var(--border, #e3dfd4)" }}>
            Owner of 3 premium 2BHK residential properties in Kharadi and Viman Nagar. Looking for clean, responsible working professionals and exam aspirants who value quiet living and timely maintenance.
          </p>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy, #121b2d)" }}>
            Portfolio &amp; Operational Metrics
          </h3>
          <div className="owner-profile-specs">
            <div className="owner-spec-box">
              <div className="owner-spec-label">Total Properties Listed</div>
              <div className="owner-spec-val">3 Units in Pune</div>
            </div>
            <div className="owner-spec-box">
              <div className="owner-spec-label">Typical Response Time</div>
              <div className="owner-spec-val">⚡ &lt; 30 Minutes</div>
            </div>
            <div className="owner-spec-box">
              <div className="owner-spec-label">Standard Agreement Term</div>
              <div className="owner-spec-val">11 Months Registered</div>
            </div>
            <div className="owner-spec-box">
              <div className="owner-spec-label">Security Deposit Policy</div>
              <div className="owner-spec-val">2 Months Refundable</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
