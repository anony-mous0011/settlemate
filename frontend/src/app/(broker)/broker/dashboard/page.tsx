"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { sampleProperties, sampleTenants } from "@/lib/mockData";
import "./broker-dashboard.css";

export default function BrokerDashboardPage() {
  const [invitedMap, setInvitedMap] = useState<Record<string, boolean>>({});

  const managedInventory = [
    sampleProperties[0], // Kharadi 2BHK
    sampleProperties[1], // Viman Nagar 3BHK
    sampleProperties[2], // Hinjawadi 1BHK
    sampleProperties[3], // Central Ave
  ];

  const handleRecommend = (tenantId: string) => {
    setInvitedMap((prev) => ({ ...prev, [tenantId]: true }));
  };

  return (
    <div className="broker-dash-wrap">
      {/* Greeting Row */}
      <div className="broker-greeting-row">
        <div>
          <h1 className="broker-greeting-title">Hello, Vikram Mehta</h1>
          <p className="broker-greeting-sub">
            Managing 8 active properties across Kharadi, Viman Nagar &amp; Hinjawadi. 12 matching tenant leads this week.
          </p>
        </div>
        <Link href="/owner/listings" className="broker-add-inventory-btn">
          + Add Client Listing
        </Link>
      </div>

      {/* Broker KPI Metrics */}
      <div className="broker-stats-grid">
        <div className="broker-stat-card">
          <div className="broker-stat-icon">🏢</div>
          <div className="broker-stat-number">8</div>
          <div className="broker-stat-label">Managed Properties</div>
        </div>

        <div className="broker-stat-card">
          <div className="broker-stat-icon">👥</div>
          <div className="broker-stat-number">12</div>
          <div className="broker-stat-label">Active Leads</div>
        </div>

        <div className="broker-stat-card">
          <div className="broker-stat-icon">⚡</div>
          <div className="broker-stat-number">92%</div>
          <div className="broker-stat-label">Lead Match Rate</div>
        </div>

        <div className="broker-stat-card">
          <div className="broker-stat-icon">🤝</div>
          <div className="broker-stat-number">4</div>
          <div className="broker-stat-label">Pending Visits</div>
        </div>
      </div>

      {/* Main Grid: Managed Inventory & Movers in Need */}
      <div className="broker-main-grid">
        {/* Left Column: Managed Inventory */}
        <div className="broker-dash-section">
          <div className="broker-section-header">
            <div>
              <h2 className="broker-section-title">Managed Inventory</h2>
              <span className="broker-section-sub">Properties you are currently marketing</span>
            </div>
            <Link href="/owner/listings" className="broker-link-btn">
              View all (8) →
            </Link>
          </div>

          <div className="broker-inventory-list">
            {managedInventory.map((prop) => (
              <div key={prop.id} className="broker-prop-card">
                <div className="broker-prop-thumb">
                  <Image
                    src={prop.imageSrc}
                    alt={prop.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="broker-prop-info">
                  <div className="broker-prop-title">{prop.title}</div>
                  <div className="broker-prop-loc">📍 {prop.location} · {prop.propertyType}</div>
                  <div className="broker-prop-price">
                    ₹{prop.pricePerMonth.toLocaleString()}/mo total
                    <span className="broker-prop-badge">Active</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: High Intent Movers */}
        <div className="broker-dash-section">
          <div className="broker-section-header">
            <div>
              <h2 className="broker-section-title">Movers Looking for Flats</h2>
              <span className="broker-section-sub">Matched by budget &amp; move-in dates</span>
            </div>
            <Link href="/owner/people" className="broker-link-btn">
              Explore all →
            </Link>
          </div>

          <div className="broker-movers-list">
            {sampleTenants.slice(0, 4).map((tenant) => {
              const isRecommended = invitedMap[tenant.id];
              return (
                <div key={tenant.id} className="broker-mover-card">
                  <div className="broker-mover-left">
                    <div
                      className="broker-mover-avatar"
                      style={{ backgroundColor: tenant.avatarBg || "#3d7a68" }}
                    >
                      {tenant.initials || tenant.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="broker-mover-name">
                        {tenant.name}, {tenant.age}
                      </div>
                      <div className="broker-mover-meta">
                        📍 {tenant.location} · {tenant.budget}
                      </div>
                      <div className="broker-mover-role">{tenant.occupation}</div>
                    </div>
                  </div>

                  <div className="broker-mover-right">
                    <span className="broker-match-chip">Verified Mover</span>
                    <button
                      type="button"
                      className={`broker-recommend-btn ${isRecommended ? "recommended" : ""}`}
                      onClick={() => handleRecommend(tenant.id)}
                      disabled={isRecommended}
                    >
                      {isRecommended ? "Shared ✓" : "Share Listing"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
