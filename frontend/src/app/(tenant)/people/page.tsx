"use client";

import React, { useState } from "react";
import { sampleTenants } from "@/lib/mockData";
import RoommateCard from "@/components/ui/RoommateCard/RoommateCard";
import "./people.css";

export default function PeoplePage() {
  const [selectedLocality, setSelectedLocality] = useState("All");

  const filtered =
    selectedLocality === "All"
      ? sampleTenants
      : sampleTenants.filter((p) => p.location === selectedLocality);

  return (
    <div className="people-page-wrap">
      <div className="people-page-header">
        <div>
          <h1 className="people-title">Discover Roommates in Pune</h1>
          <p className="people-sub">
            Ranked by destination overlap, budget compatibility, and personal living habits.
          </p>
        </div>
      </div>

      <div className="people-filter-bar">
        <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#121b2d", marginRight: "0.5rem" }}>
          Locality Filter:
        </span>
        {["All", "Kharadi", "Viman Nagar", "Baner", "Hinjawadi"].map((loc) => (
          <button
            key={loc}
            className={`filter-btn-pill ${selectedLocality === loc ? "active" : ""}`}
            onClick={() => setSelectedLocality(loc)}
          >
            {loc}
          </button>
        ))}
      </div>

      <div className="people-grid-full">
        {filtered.map((person) => (
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
              matchScore: 90,
              tags: person.tags,
              lookingFor: person.lookingFor,
              isOnline: person.isOnline,
            }}
          />
        ))}
      </div>
    </div>
  );
}
