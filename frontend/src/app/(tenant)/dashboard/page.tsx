"use client";

import React from "react";
import Link from "next/link";
import {
  initialMoveProfile,
  sampleTenants,
  sampleProperties,
} from "@/lib/mockData";
import RoommateCard from "@/components/ui/RoommateCard/RoommateCard";
import PropertyCard from "@/components/ui/PropertyCard/PropertyCard";
import "./dashboard.css";

export default function TenantDashboard() {
  const topMatches = sampleTenants.slice(1, 4);
  const topProperties = sampleProperties.slice(0, 3);

  return (
    <div className="dashboard-wrap">
      {/* Greeting Header */}
      <div className="dashboard-greeting-row">
        <div>
          <h1 className="greeting-title">Hello, Aditi</h1>
          <p className="greeting-sub">
            Here are your latest roommate matches and housing options for your move to Pune.
          </p>
        </div>
      </div>

      {/* Active Relocation Profile Banner */}
      <div className="active-move-banner">
        <div>
          <div className="move-banner-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
            Active Move Profile
          </div>
          <div className="move-banner-destination">
            Moving to {initialMoveProfile.destinationCity} · {initialMoveProfile.preferredAreas.join(", ")}
          </div>
          <div className="move-banner-specs">
            <span className="move-spec-item">
              🎯 {initialMoveProfile.reason}
            </span>
            <span className="move-spec-item">
              📅 {initialMoveProfile.moveInDate}
            </span>
            <span className="move-spec-item">
              💰 ₹{initialMoveProfile.budgetMin / 1000}k–{initialMoveProfile.budgetMax / 1000}k/month
            </span>
            <span className="move-spec-item">
              🏠 {initialMoveProfile.flatTypePreference}
            </span>
          </div>
        </div>

        <Link href="/my-move" className="edit-move-btn">
          Edit My Move →
        </Link>
      </div>

      {/* Section 1: People Going Your Way */}
      <div>
        <div className="dash-section-header">
          <div>
            <h2 className="dash-section-title">People going your way</h2>
            <p style={{ fontSize: "0.86rem", color: "#6e6a62", marginTop: "0.2rem" }}>
              Location overlap &amp; move timeline matched first, ranked by living compatibility.
            </p>
          </div>
          <Link href="/people" className="dash-see-all-link">
            Explore All Movers ({sampleTenants.length}) →
          </Link>
        </div>

        <div className="dash-grid-roommates">
          {topMatches.map((person) => (
            <RoommateCard
              key={person.id}
              profile={{
                id: person.id,
                name: person.name,
                age: person.age,
                initials: person.initials,
                avatarBg: person.avatarBg,
                location: person.location,
                city: person.city,
                timeline: person.timeline,
                occupation: person.occupation,
                occupationIcon: person.occupationIcon,
                budget: person.budget,
                matchScore: 92,
                tags: person.tags,
                lookingFor: person.lookingFor,
                isOnline: person.isOnline,
              }}
            />
          ))}
        </div>
      </div>

      {/* Section 2: Places That Fit */}
      <div>
        <div className="dash-section-header">
          <div>
            <h2 className="dash-section-title">Places that fit your move</h2>
            <p style={{ fontSize: "0.86rem", color: "#6e6a62", marginTop: "0.2rem" }}>
              Direct owner listings in Kharadi &amp; Viman Nagar matching your budget.
            </p>
          </div>
          <Link href="/places" className="dash-see-all-link">
            View All Properties ({sampleProperties.length}) →
          </Link>
        </div>

        <div className="dash-grid-properties">
          {topProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>
    </div>
  );
}
