"use client";

import React from "react";
import { sampleTenants } from "@/lib/mockData";
import "./profile.css";

export default function TenantProfilePage() {
  const user = sampleTenants[0]; // Aditi R.

  return (
    <div className="profile-page-wrap">
      <div>
        <h1 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.85rem", fontWeight: 500, color: "var(--navy, #121b2d)" }}>
          Personal Profile &amp; Living Habits
        </h1>
        <p style={{ fontSize: "0.92rem", color: "var(--text-muted, #6e6a62)", marginTop: "0.2rem" }}>
          This information is shared with prospective roommates once you connect.
        </p>
      </div>

      <div className="profile-card">
        <div className="profile-top-header">
          <div className="profile-big-avatar">{user.initials}</div>
          <div>
            <h2 className="profile-header-name">{user.name}, {user.age}</h2>
            <p className="profile-header-sub">
              🎓 {user.occupation} · Moving to {user.city} in {user.timeline}
            </p>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy, #121b2d)", marginBottom: "0.5rem" }}>
            About You &amp; Bio
          </h3>
          <p style={{ fontSize: "0.92rem", color: "#334155", lineHeight: 1.6, backgroundColor: "#f8fafc", padding: "1rem", borderRadius: "0.5rem", border: "1px solid var(--border, #e3dfd4)" }}>
            {user.bio}
          </p>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy, #121b2d)" }}>
            Living &amp; Routine Preferences
          </h3>
          <div className="habits-grid">
            <div className="habit-item">
              <div className="habit-label">Food Preference</div>
              <div className="habit-val">🥗 {user.foodPreference}</div>
            </div>
            <div className="habit-item">
              <div className="habit-label">Smoking Policy</div>
              <div className="habit-val">🚭 {user.smoking}</div>
            </div>
            <div className="habit-item">
              <div className="habit-label">Cleanliness Expectation</div>
              <div className="habit-val">🧹 {user.cleanliness}</div>
            </div>
            <div className="habit-item">
              <div className="habit-label">Sleep &amp; Wake Hours</div>
              <div className="habit-val">⏰ {user.sleepSchedule}</div>
            </div>
            <div className="habit-item">
              <div className="habit-label">Guests &amp; Visitors</div>
              <div className="habit-val">👥 {user.guestsPolicy}</div>
            </div>
            <div className="habit-item">
              <div className="habit-label">Looking For</div>
              <div className="habit-val">🏠 {user.lookingFor}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
