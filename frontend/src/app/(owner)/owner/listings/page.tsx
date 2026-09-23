"use client";

import React, { useState } from "react";
import Image from "next/image";
import { sampleProperties, Property } from "@/lib/mockData";
import "./owner-listings.css";

export default function OwnerListingsPage() {
  const [properties, setProperties] = useState<Property[]>([
    sampleProperties[0],
    sampleProperties[3],
    sampleProperties[5],
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("16000");
  const [newLocality, setNewLocality] = useState("Kharadi");

  const handleAddListing = (e: React.FormEvent) => {
    e.preventDefault();
    const newProp: Property = {
      id: "p" + (properties.length + 10),
      title: newTitle || "2BHK Modern Flat with Balcony",
      propertyType: "2BHK Shared Flat",
      pricePerMonth: Number(newPrice) || 16000,
      deposit: Number(newPrice) * 2 || 32000,
      location: newLocality + ", Pune",
      city: "Pune",
      amenities: ["📶 Wi-Fi", "🛋️ Semi-Furnished", "⚡ Power Backup"],
      availableDate: "Oct 15, 2026",
      ownerName: "Rajesh Kulkarni",
      ownerType: "Direct Owner",
      responseRate: "Responds in < 30m",
      imageSrc: "/pic7.jpg",
      imageTag: "Direct Owner Listing",
      roommatesNeeded: 1,
      description: "Newly added property listing.",
      viewsCount: 1,
      enquiriesCount: 0,
      status: "Active",
    };
    setProperties([newProp, ...properties]);
    setShowAddModal(false);
    setNewTitle("");
  };

  return (
    <div className="owner-listings-wrap">
      <div className="listings-top-header">
        <div>
          <h1 className="listings-title">My Properties &amp; Listings</h1>
          <p className="listings-sub">
            Manage your rental inventory in Pune, adjust pricing, and review tenant traffic.
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          style={{
            padding: "0.75rem 1.4rem",
            borderRadius: "0.6rem",
            backgroundColor: "var(--navy, #121b2d)",
            color: "#ffffff",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
          }}
        >
          + Add New Property
        </button>
      </div>

      {showAddModal && (
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid var(--border, #e3dfd4)",
            borderRadius: "1rem",
            padding: "1.75rem",
            boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
          }}
        >
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--navy, #121b2d)", marginBottom: "1rem" }}>
            Add New Property Listing
          </h3>
          <form onSubmit={handleAddListing} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <label style={{ fontSize: "0.84rem", fontWeight: 600 }}>Property Title</label>
              <input
                type="text"
                required
                placeholder="e.g. Spacious 2BHK Near Metro"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                style={{ padding: "0.65rem 0.85rem", borderRadius: "0.5rem", border: "1px solid #cbd5e1" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <label style={{ fontSize: "0.84rem", fontWeight: 600 }}>Locality in Pune</label>
              <select
                value={newLocality}
                onChange={(e) => setNewLocality(e.target.value)}
                style={{ padding: "0.65rem 0.85rem", borderRadius: "0.5rem", border: "1px solid #cbd5e1" }}
              >
                <option value="Kharadi">Kharadi</option>
                <option value="Viman Nagar">Viman Nagar</option>
                <option value="Baner">Baner</option>
                <option value="Hinjawadi">Hinjawadi</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <label style={{ fontSize: "0.84rem", fontWeight: 600 }}>Monthly Rent (₹)</label>
              <input
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                style={{ padding: "0.65rem 0.85rem", borderRadius: "0.5rem", border: "1px solid #cbd5e1" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "0.75rem" }}>
              <button
                type="submit"
                style={{
                  padding: "0.7rem 1.4rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "var(--accent, #3d7a68)",
                  color: "#fff",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Publish Listing
              </button>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                style={{
                  padding: "0.7rem 1.1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #cbd5e1",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="listings-grid-full">
        {properties.map((prop) => (
          <div
            key={prop.id}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid var(--border, #e3dfd4)",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 4px 16px -4px rgba(18, 27, 45, 0.06)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ position: "relative", height: "180px", width: "100%" }}>
              <Image src={prop.imageSrc} alt={prop.title} fill className="object-cover" />
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

            <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--navy, #121b2d)" }}>
                {prop.title}
              </h3>
              <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.15rem" }}>
                📍 {prop.location}
              </div>
              <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--navy, #121b2d)", margin: "0.4rem 0" }}>
                ₹{prop.pricePerMonth.toLocaleString("en-IN")}/mo
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.6rem 0",
                  borderTop: "1px solid var(--border, #e3dfd4)",
                  borderBottom: "1px solid var(--border, #e3dfd4)",
                  margin: "0.6rem 0",
                  fontSize: "0.8rem",
                  color: "var(--text-muted, #6e6a62)",
                }}
              >
                <span>👁️ {prop.viewsCount} views</span>
                <span>📩 {prop.enquiriesCount} enquiries</span>
              </div>

              <div style={{ display: "flex", gap: "0.5rem", marginTop: "auto" }}>
                <button
                  style={{
                    flex: 1,
                    padding: "0.55rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "var(--navy, #121b2d)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.82rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Edit Listing
                </button>
                <button
                  style={{
                    padding: "0.55rem 0.85rem",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--border, #e3dfd4)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  View Live
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
