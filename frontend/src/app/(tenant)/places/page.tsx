"use client";

import React, { useState } from "react";
import { sampleProperties } from "@/lib/mockData";
import PropertyCard from "@/components/ui/PropertyCard/PropertyCard";
import "./places.css";

export default function PlacesPage() {
  const [selectedLocality, setSelectedLocality] = useState("All");

  const filtered =
    selectedLocality === "All"
      ? sampleProperties
      : sampleProperties.filter((p) =>
          p.location.toLowerCase().includes(selectedLocality.toLowerCase())
        );

  return (
    <div className="places-page-wrap">
      <div className="places-page-header">
        <div>
          <h1 className="places-title">Browse Verified Properties in Pune</h1>
          <p className="places-sub">
            Shared 2BHK and 3BHK flats listed directly by individual property owners.
          </p>
        </div>
      </div>

      <div className="places-filter-bar">
        <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#121b2d", marginRight: "0.5rem" }}>
          Locality:
        </span>
        {["All", "Kharadi", "Viman Nagar", "Baner", "Koregaon"].map((loc) => (
          <button
            key={loc}
            className={`filter-btn-pill ${selectedLocality === loc ? "active" : ""}`}
            onClick={() => setSelectedLocality(loc)}
          >
            {loc}
          </button>
        ))}
      </div>

      <div className="places-grid-full">
        {filtered.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
