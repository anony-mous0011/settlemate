"use client";

import React, { useState } from "react";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import SectionSub from "../../ui/SectionSub/SectionSub";
import "./StartMove.css";

const reasons = [
  { id: "study", label: "Study", icon: "🎓" },
  { id: "work", label: "Work / Job", icon: "💼" },
  { id: "coaching", label: "Coaching", icon: "📚" },
  { id: "fresh", label: "Fresh Start", icon: "🚀" },
];

export default function StartMove() {
  const [targetCity, setTargetCity] = useState("Pune");
  const [selectedReason, setSelectedReason] = useState("coaching");
  const [areas, setAreas] = useState(["Kharadi", "Viman Nagar"]);
  const [budgetMax, setBudgetMax] = useState(15000);
  const [moveMonth, setMoveMonth] = useState("October 2026");
  const [submitted, setSubmitted] = useState(false);

  const handleRemoveArea = (areaToRemove: string) => {
    setAreas(areas.filter((a) => a !== areaToRemove));
  };

  const handleAddArea = () => {
    const newArea = prompt("Enter preferred locality (e.g., Baner, Wakad, Hinjawadi):");
    if (newArea && newArea.trim() && !areas.includes(newArea.trim())) {
      setAreas([...areas, newArea.trim()]);
    }
  };

  return (
    <section id="move" className="start-move-section">
      <div className="start-move-grid">
        <div>
          <Eyebrow>Step One · Relocation Profile</Eyebrow>
          <SectionTitle>Start with your move.</SectionTitle>
          <SectionSub>
            Tell SettleMate where you&rsquo;re going, why, and your target budget. This is what everything else — people, housing, and locality intelligence — gets matched against.
          </SectionSub>
          <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.9rem", color: "#6e6a62" }}>
              <span style={{ color: "#3d7a68", fontWeight: 700 }}>✓</span> Location-first matching ensures zero irrelevant recommendations
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.9rem", color: "#6e6a62" }}>
              <span style={{ color: "#3d7a68", fontWeight: 700 }}>✓</span> Combined budgets unlock higher quality 2BHK/3BHK flats
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.9rem", color: "#6e6a62" }}>
              <span style={{ color: "#3d7a68", fontWeight: 700 }}>✓</span> Synchronized move-in dates for immediate co-living
            </div>
          </div>
        </div>

        {/* Interactive App-like Relocation Configurator Form */}
        <div className="wizard-card">
          <div className="wizard-header">
            <div className="wizard-header-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              Build Your Move Profile
            </div>
            <span className="wizard-step-pill">1 min setup</span>
          </div>

          <form
            className="wizard-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="wizard-field-group">
              <label className="wizard-label">Where are you moving?</label>
              <select
                className="wizard-select"
                value={targetCity}
                onChange={(e) => setTargetCity(e.target.value)}
              >
                <option value="Pune">Pune (Maharashtra)</option>
                <option value="Bengaluru">Bengaluru (Karnataka)</option>
                <option value="Hyderabad">Hyderabad (Telangana)</option>
                <option value="Mumbai">Mumbai (Maharashtra)</option>
                <option value="Delhi NCR">Delhi NCR</option>
              </select>
            </div>

            <div className="wizard-field-group">
              <label className="wizard-label">Why are you moving?</label>
              <div className="wizard-chips-row">
                {reasons.map((r) => (
                  <button
                    type="button"
                    key={r.id}
                    className={`wizard-choice-chip ${selectedReason === r.id ? "selected" : ""}`}
                    onClick={() => setSelectedReason(r.id)}
                  >
                    <span>{r.icon}</span>
                    <span>{r.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="wizard-field-group">
              <label className="wizard-label">Preferred Areas</label>
              <div className="wizard-tags-container">
                {areas.map((a) => (
                  <span key={a} className="wizard-area-tag">
                    {a}
                    <span
                      className="wizard-tag-remove"
                      onClick={() => handleRemoveArea(a)}
                    >
                      ×
                    </span>
                  </span>
                ))}
                <button
                  type="button"
                  className="wizard-add-area-btn"
                  onClick={handleAddArea}
                >
                  + Add Area
                </button>
              </div>
            </div>

            <div className="wizard-field-group">
              <div className="wizard-range-slider-box">
                <div className="wizard-range-vals">
                  <label className="wizard-label">Target Budget (Your Share)</label>
                  <span>₹10,000 – ₹{budgetMax.toLocaleString("en-IN")}/mo</span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={30000}
                  step={1000}
                  value={budgetMax}
                  onChange={(e) => setBudgetMax(Number(e.target.value))}
                  className="wizard-slider-input"
                />
              </div>
            </div>

            <div className="wizard-field-group">
              <label className="wizard-label">Target Move-in Timeline</label>
              <select
                className="wizard-select"
                value={moveMonth}
                onChange={(e) => setMoveMonth(e.target.value)}
              >
                <option value="October 2026">October 2026 (Next 30 days)</option>
                <option value="November 2026">November 2026</option>
                <option value="December 2026">December 2026</option>
                <option value="January 2027">January 2027</option>
              </select>
            </div>

            <button type="submit" className="wizard-submit-btn">
              {submitted ? (
                <>✓ Found 24 compatible movers in {targetCity}!</>
              ) : (
                <>
                  Find My Matches in {targetCity}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
