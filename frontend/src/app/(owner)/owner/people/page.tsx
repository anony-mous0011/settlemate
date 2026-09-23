"use client";

import React, { useState } from "react";
import { sampleTenants } from "@/lib/mockData";
import "./owner-people.css";

export default function OwnerPeoplePage() {
  const [selectedLocality, setSelectedLocality] = useState("All");
  const [invitedMap, setInvitedMap] = useState<Record<string, boolean>>({});

  const filtered =
    selectedLocality === "All"
      ? sampleTenants
      : sampleTenants.filter((t) => t.location === selectedLocality);

  const handleInvite = (id: string) => {
    setInvitedMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="owner-people-wrap">
      <div className="owner-people-header">
        <div>
          <h1 className="owner-people-title">Movers Looking in Your Area</h1>
          <p className="owner-people-sub">
            Pre-screened relocators planning moves to Pune. Approach them directly with relevant property listings.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {["All", "Kharadi", "Viman Nagar", "Baner", "Hinjawadi"].map((loc) => (
          <button
            key={loc}
            onClick={() => setSelectedLocality(loc)}
            style={{
              padding: "0.45rem 0.95rem",
              borderRadius: "9999px",
              fontSize: "0.82rem",
              fontWeight: 600,
              border: "1px solid var(--border, #e3dfd4)",
              backgroundColor:
                selectedLocality === loc
                  ? "var(--navy, #121b2d)"
                  : "var(--surface, #ffffff)",
              color: selectedLocality === loc ? "#ffffff" : "var(--text-muted, #6e6a62)",
              cursor: "pointer",
            }}
          >
            {loc}
          </button>
        ))}
      </div>

      <div className="owner-people-grid">
        {filtered.map((tenant) => (
          <div key={tenant.id} className="owner-tenant-match-card">
            <div>
              <div className="tenant-match-header">
                <div className="tenant-match-left">
                  <div
                    className="tenant-avatar-bubble"
                    style={{ backgroundColor: tenant.avatarBg }}
                  >
                    {tenant.initials}
                  </div>
                  <div>
                    <h3 className="tenant-match-name">
                      {tenant.name}, {tenant.age}
                    </h3>
                    <div className="tenant-match-meta">
                      📍 {tenant.location} · Moving {tenant.timeline} · {tenant.occupation}
                    </div>
                  </div>
                </div>
                <span className="tenant-budget-pill">{tenant.budget}</span>
              </div>

              <div className="tenant-looking-detail">
                <div style={{ fontWeight: 700, marginBottom: "0.2rem" }}>
                  Looking for:
                </div>
                {tenant.lookingFor}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.25rem" }}>
                {tenant.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "0.2rem 0.55rem",
                      borderRadius: "9999px",
                      border: "1px solid var(--border, #e3dfd4)",
                      fontSize: "0.74rem",
                      color: "#475569",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              className="invite-action-btn"
              onClick={() => handleInvite(tenant.id)}
            >
              {invitedMap[tenant.id]
                ? "✓ Invitation Sent to Tenant"
                : `Invite ${tenant.name.split(" ")[0]} to View Listing →`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
