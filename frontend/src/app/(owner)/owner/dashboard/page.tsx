"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { sampleProperties, sampleTenants, sampleEnquiries } from "@/lib/mockData";
import "./owner-dashboard.css";

export default function OwnerDashboardPage() {
  const [invitedMap, setInvitedMap] = useState<Record<string, boolean>>({});

  // Owner's listings
  const ownerListings = [
    sampleProperties[0], // pic1 (Kharadi 2BHK)
    sampleProperties[3], // pic4 (Central Ave 2BHK)
    sampleProperties[5], // pic6 (Viman Nagar 2BHK)
  ];

  const handleInvite = (tenantId: string) => {
    setInvitedMap((prev) => ({ ...prev, [tenantId]: true }));
  };

  return (
    <div className="owner-dash-wrap">
      {/* Greeting Row */}
      <div className="owner-greeting-row">
        <div>
          <h1 className="owner-greeting-title">Hello, Rajesh Kulkarni</h1>
          <p className="owner-greeting-sub">
            You have 3 active listings in Kharadi &amp; Viman Nagar. 7 new tenant enquiries received this week.
          </p>
        </div>
        <Link href="/owner/listings" className="owner-add-listing-btn">
          + Add New Property
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="owner-stats-grid">
        <div className="owner-stat-card">
          <div className="owner-stat-icon">🏠</div>
          <div className="owner-stat-number">3</div>
          <div className="owner-stat-label">Active Listings</div>
        </div>

        <div className="owner-stat-card">
          <div className="owner-stat-icon">📩</div>
          <div className="owner-stat-number">7</div>
          <div className="owner-stat-label">New Enquiries</div>
        </div>

        <div className="owner-stat-card">
          <div className="owner-stat-icon">👁️</div>
          <div className="owner-stat-number">24</div>
          <div className="owner-stat-label">Views Today</div>
        </div>

        <div className="owner-stat-card">
          <div className="owner-stat-icon">👥</div>
          <div className="owner-stat-number">5</div>
          <div className="owner-stat-label">Movers Looking in Area</div>
        </div>
      </div>

      {/* Section 1: Your Active Listings */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.35rem", fontWeight: 600, color: "var(--navy, #121b2d)" }}>
              Your Properties
            </h2>
            <p style={{ fontSize: "0.86rem", color: "#6e6a62" }}>
              Monitor visibility, tenant inquiries, and occupancy status.
            </p>
          </div>
          <Link href="/owner/listings" style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--accent-ink, #2a5c4d)", textDecoration: "none" }}>
            Manage Listings ({ownerListings.length}) →
          </Link>
        </div>

        <div className="owner-listings-grid">
          {ownerListings.map((prop) => (
            <div key={prop.id} className="owner-property-card">
              <div className="owner-property-img-box">
                <Image
                  src={prop.imageSrc}
                  alt={prop.title}
                  fill
                  className="object-cover"
                />
                <span
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    backgroundColor: "rgba(18, 27, 45, 0.85)",
                    color: "#fff",
                    padding: "3px 8px",
                    borderRadius: "9999px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                  }}
                >
                  🟢 {prop.status}
                </span>
              </div>

              <div className="owner-property-body">
                <h3 className="owner-property-title">{prop.title}</h3>
                <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.15rem" }}>
                  📍 {prop.location}
                </div>
                <div className="owner-property-price">
                  ₹{prop.pricePerMonth.toLocaleString("en-IN")}/mo
                </div>

                <div className="owner-property-metrics">
                  <span>👁️ {prop.viewsCount} views</span>
                  <span>📩 {prop.enquiriesCount} enquiries</span>
                </div>

                <div className="owner-property-actions">
                  <Link href="/owner/listings" className="owner-btn-manage">
                    Manage / Edit
                  </Link>
                  <Link
                    href="/owner/enquiries"
                    style={{
                      padding: "0.55rem 0.85rem",
                      borderRadius: "0.5rem",
                      border: "1px solid var(--border, #e3dfd4)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--navy, #121b2d)",
                      textDecoration: "none",
                    }}
                  >
                    Enquiries
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Two-Way Marketplace - Discover People Looking in Area */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.35rem", fontWeight: 600, color: "var(--navy, #121b2d)" }}>
              People Looking in Your Locality
            </h2>
            <p style={{ fontSize: "0.86rem", color: "#6e6a62" }}>
              Active relocators moving to Kharadi &amp; Viman Nagar with budgets matching your flats.
            </p>
          </div>
          <Link href="/owner/people" style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--accent-ink, #2a5c4d)", textDecoration: "none" }}>
            View All Looking ({sampleTenants.length}) →
          </Link>
        </div>

        <div className="people-looking-card">
          {sampleTenants.slice(0, 4).map((tenant) => (
            <div key={tenant.id} className="people-looking-item">
              <div className="people-looking-left">
                <div
                  className="people-avatar-circle"
                  style={{ backgroundColor: tenant.avatarBg }}
                >
                  {tenant.initials}
                </div>
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy, #121b2d)" }}>
                    {tenant.name}, {tenant.age}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                    📍 Moving to {tenant.location} in {tenant.timeline} · Budget {tenant.budget} · {tenant.occupation}
                  </div>
                </div>
              </div>

              <button
                className="invite-tenant-btn"
                onClick={() => handleInvite(tenant.id)}
              >
                {invitedMap[tenant.id] ? "✓ Invitation Sent" : "Invite to View Flat →"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Recent Tenant Enquiries */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.35rem", fontWeight: 600, color: "var(--navy, #121b2d)" }}>
              Recent Tenant Enquiries
            </h2>
            <p style={{ fontSize: "0.86rem", color: "#6e6a62" }}>
              Prospective tenant pairs inquiring about your 2BHK units.
            </p>
          </div>
          <Link href="/owner/enquiries" style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--accent-ink, #2a5c4d)", textDecoration: "none" }}>
            See All Enquiries ({sampleEnquiries.length}) →
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {sampleEnquiries.map((enq) => (
            <div
              key={enq.id}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid var(--border, #e3dfd4)",
                borderRadius: "1rem",
                padding: "1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.25rem" }}>
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy, #121b2d)" }}>
                    {enq.tenantNames.join(" & ")}
                  </span>
                  <span style={{ fontSize: "0.74rem", fontWeight: 700, padding: "2px 8px", borderRadius: "9999px", backgroundColor: "#eff6ff", color: "#1e40af" }}>
                    {enq.status}
                  </span>
                </div>
                <div style={{ fontSize: "0.84rem", color: "#64748b" }}>
                  Inquiry for: <strong>{enq.propertyTitle}</strong> · Target Move: {enq.moveInTarget}
                </div>
                <p style={{ fontSize: "0.86rem", color: "#334155", marginTop: "0.4rem" }}>
                  &ldquo;{enq.message}&rdquo;
                </p>
              </div>

              <Link
                href="/owner/messages"
                style={{
                  padding: "0.65rem 1.1rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "var(--navy, #121b2d)",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Reply to Inquiry 💬
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
