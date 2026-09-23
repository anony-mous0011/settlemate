"use client";

import React, { useState } from "react";
import { initialMoveProfile } from "@/lib/mockData";
import "./my-move.css";

export default function MyMovePage() {
  const [city, setCity] = useState(initialMoveProfile.destinationCity);
  const [reason, setReason] = useState(initialMoveProfile.reason);
  const [areas, setAreas] = useState<string[]>(initialMoveProfile.preferredAreas);
  const [budgetMax, setBudgetMax] = useState(initialMoveProfile.budgetMax);
  const [moveInDate, setMoveInDate] = useState(initialMoveProfile.moveInDate);
  const [flatType, setFlatType] = useState(initialMoveProfile.flatTypePreference);
  const [saved, setSaved] = useState(false);

  const handleRemoveArea = (area: string) => {
    setAreas(areas.filter((a) => a !== area));
  };

  const handleAddArea = () => {
    const newArea = prompt("Enter preferred locality (e.g. Baner, Wakad, Hinjawadi):");
    if (newArea && newArea.trim() && !areas.includes(newArea.trim())) {
      setAreas([...areas, newArea.trim()]);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="mymove-page-wrap">
      <div>
        <h1 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.85rem", fontWeight: 500, color: "var(--navy, #121b2d)" }}>
          Your Relocation Profile
        </h1>
        <p style={{ fontSize: "0.92rem", color: "var(--text-muted, #6e6a62)", marginTop: "0.2rem" }}>
          Update your destination, budget parameters, and living criteria to refine matching.
        </p>
      </div>

      <div className="mymove-card">
        <form onSubmit={handleSave} className="mymove-form">
          <div className="form-group">
            <label className="form-label">Destination City</label>
            <select
              className="form-select"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="Pune">Pune, Maharashtra</option>
              <option value="Bengaluru">Bengaluru, Karnataka</option>
              <option value="Hyderabad">Hyderabad, Telangana</option>
              <option value="Mumbai">Mumbai, Maharashtra</option>
              <option value="Delhi NCR">Delhi NCR</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Primary Reason for Moving</label>
            <select
              className="form-select"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            >
              <option value="Coaching / UPSC Preparation">Coaching / Exam Preparation</option>
              <option value="Work / Job">Job / Corporate Relocation</option>
              <option value="College / Higher Studies">College / University Studies</option>
              <option value="Fresh Start">Independent Living / Fresh Start</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Target Localities in {city}</label>
            <div className="tags-box">
              {areas.map((a) => (
                <span key={a} className="move-tag-pill">
                  {a}
                  <span
                    onClick={() => handleRemoveArea(a)}
                    style={{ cursor: "pointer", color: "#64748b", fontWeight: 700 }}
                  >
                    ×
                  </span>
                </span>
              ))}
              <button
                type="button"
                onClick={handleAddArea}
                style={{
                  padding: "0.35rem 0.8rem",
                  borderRadius: "9999px",
                  border: "1px dashed var(--border, #e3dfd4)",
                  background: "transparent",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#48547a",
                  cursor: "pointer",
                }}
              >
                + Add Locality
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              Monthly Budget (Your Individual Share): ₹{budgetMax.toLocaleString("en-IN")}/mo
            </label>
            <input
              type="range"
              min={8000}
              max={30000}
              step={1000}
              value={budgetMax}
              onChange={(e) => setBudgetMax(Number(e.target.value))}
              style={{ accentColor: "var(--accent, #3d7a68)", cursor: "pointer" }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Target Move-in Date</label>
            <input
              type="text"
              className="form-input"
              value={moveInDate}
              onChange={(e) => setMoveInDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Flat Type Preference</label>
            <select
              className="form-select"
              value={flatType}
              onChange={(e) => setFlatType(e.target.value)}
            >
              <option value="2BHK Shared Flat">2BHK Shared Flat (1 roommate)</option>
              <option value="3BHK Shared Flat">3BHK Shared Flat (2 roommates)</option>
              <option value="Private Room in Shared Flat">Private Room in Flat</option>
              <option value="Studio / 1BHK">Studio / 1BHK Independent</option>
            </select>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
            <button type="submit" className="save-move-btn">
              Save Move Parameters
            </button>
            {saved && (
              <span style={{ color: "#059669", fontWeight: 700, fontSize: "0.9rem" }}>
                ✓ Move profile updated successfully!
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
