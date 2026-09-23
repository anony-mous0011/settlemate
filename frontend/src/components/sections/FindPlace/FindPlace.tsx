"use client";

import React, { useState } from "react";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import SectionSub from "../../ui/SectionSub/SectionSub";
import PropertyCard, { PropertyItem } from "../../ui/PropertyCard/PropertyCard";
import "./FindPlace.css";

const marketplaceProperties: PropertyItem[] = [
  {
    id: "p1",
    title: "Spacious 2BHK with Scenic Balcony & Modern Living",
    propertyType: "2BHK Shared Flat",
    pricePerMonth: 14500,
    deposit: 29000,
    location: "Kharadi, near EON IT Park",
    city: "Pune",
    amenities: ["📶 300 Mbps Wi-Fi", "🛋️ Semi-Furnished", "🌅 Balcony", "⚡ Power Backup"],
    availableDate: "Oct 1, 2026",
    ownerName: "Rajesh Kulkarni",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 30m",
    imageSrc: "/pic1.jpg",
    imageBgColor: "#1e293b",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 1,
  },
  {
    id: "p2",
    title: "Sunlit Designer 2BHK near Symbiosis Campus",
    propertyType: "2BHK Flat",
    pricePerMonth: 16500,
    deposit: 33000,
    location: "Viman Nagar",
    city: "Pune",
    amenities: ["❄️ Air Conditioned", "🏊 Pool & Gym", "🚗 Reserved Parking", "🛡️ 24/7 Security"],
    availableDate: "Oct 15, 2026",
    ownerName: "Priya Deshmukh",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 1 hr",
    imageSrc: "/pic 2.jpg",
    imageBgColor: "#0f172a",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 1,
  },
  {
    id: "p3",
    title: "Premium 3BHK Gated Society on High Street",
    propertyType: "3BHK Flat",
    pricePerMonth: 25500,
    deposit: 51000,
    location: "Baner - High Street",
    city: "Pune",
    amenities: ["🛋️ Fully Furnished", "⚡ Power Backup", "🍳 Modular Kitchen", "🧹 Maid Included"],
    availableDate: "Nov 1, 2026",
    ownerName: "Amitabh Sen",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 2 hrs",
    imageSrc: "/pic3.jpg",
    imageBgColor: "#2a2a2a",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 2,
  },
  {
    id: "p4",
    title: "Cozy 2BHK Apartment with Natural Wood Interiors",
    propertyType: "2BHK Flat",
    pricePerMonth: 15000,
    deposit: 30000,
    location: "Kharadi, Central Avenue",
    city: "Pune",
    amenities: ["📶 High Speed Wi-Fi", "🛋️ Furnished", "🚿 Geyser", "⚡ Inverter Backup"],
    availableDate: "Oct 5, 2026",
    ownerName: "Nitin Jagtap",
    ownerType: "Individual Owner",
    responseRate: "Responds in < 15m",
    imageSrc: "/pic4.jpg",
    imageBgColor: "#1e1b4b",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 1,
  },
  {
    id: "p5",
    title: "Luxury 3BHK with Green Views & Club House",
    propertyType: "3BHK Shared Flat",
    pricePerMonth: 27000,
    deposit: 54000,
    location: "Koregaon Park Annexe",
    city: "Pune",
    amenities: ["🌳 Garden View", "🏋️ Club Gym", "❄️ 3 ACs", "🚗 2 Car Parking"],
    availableDate: "Oct 20, 2026",
    ownerName: "Sunita Kapoor",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 45m",
    imageSrc: "/pic5.jpg",
    imageBgColor: "#14532d",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 2,
  },
  {
    id: "p6",
    title: "Modern Minimalist 2BHK near Metro Terminal",
    propertyType: "2BHK Flat",
    pricePerMonth: 17000,
    deposit: 34000,
    location: "Viman Nagar",
    city: "Pune",
    amenities: ["🚇 200m to Metro", "🍳 Chimney & Hob", "🛋️ Sofa Set", "🛡️ CCTV"],
    availableDate: "Nov 5, 2026",
    ownerName: "Farhan Merchant",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 1 hr",
    imageSrc: "/pic6.jpg",
    imageBgColor: "#3b0764",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 1,
  },
  {
    id: "p7",
    title: "Airy 2BHK with Terrace Balcony & Work Pods",
    propertyType: "2BHK Flat",
    pricePerMonth: 16000,
    deposit: 32000,
    location: "Baner",
    city: "Pune",
    amenities: ["💻 Work Desks", "⚡ 100% Power Backup", "🌅 Terrace", "📶 500Mbps"],
    availableDate: "Oct 10, 2026",
    ownerName: "Vandana Sharma",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 20m",
    imageSrc: "/pic7.jpg",
    imageBgColor: "#701a75",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 1,
  },
  {
    id: "p8",
    title: "Executive 3BHK Penthouse Share for Young Movers",
    propertyType: "3BHK Flat",
    pricePerMonth: 30000,
    deposit: 60000,
    location: "Kharadi, Riverfront",
    city: "Pune",
    amenities: ["🌇 Penthouse Deck", "🛋️ Fully Furnished", "🧹 Daily Housekeeping", "⚡ 24/7 Power"],
    availableDate: "Nov 1, 2026",
    ownerName: "Rohit Agarwal",
    ownerType: "Direct Owner",
    responseRate: "Responds in < 30m",
    imageSrc: "/pic8.jpg",
    imageBgColor: "#0f766e",
    imageTag: "Direct Owner Listing",
    roommatesNeeded: 2,
  },
];

export default function FindPlace() {
  const [filterLocality, setFilterLocality] = useState("All");

  const filteredProperties =
    filterLocality === "All"
      ? marketplaceProperties
      : marketplaceProperties.filter((p) =>
          p.location.toLowerCase().includes(filterLocality.toLowerCase())
        );

  return (
    <section id="housing" className="find-place-section">
      <div className="find-place-container">
        <div className="find-place-header-row">
          <div>
            <Eyebrow>Step Four · Shared Housing Marketplace</Eyebrow>
            <SectionTitle>Find a place that fits everyone.</SectionTitle>
            <SectionSub>
              Real flats photographed by owners. Browse and compare housing against your combined requirements — split rent, divided deposit, and direct owner transparency.
            </SectionSub>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "flex-end" }}>
            <div className="find-place-trust-pills">
              <span className="trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Direct Owner Listings
              </span>
              <span className="trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Zero Brokerage Deals
              </span>
            </div>

            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {["All", "Kharadi", "Viman Nagar", "Baner", "Koregaon"].map((loc) => (
                <button
                  key={loc}
                  onClick={() => setFilterLocality(loc)}
                  style={{
                    padding: "0.35rem 0.8rem",
                    borderRadius: "9999px",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    border: "1px solid var(--border, #e3dfd4)",
                    backgroundColor:
                      filterLocality === loc
                        ? "var(--navy, #16233f)"
                        : "var(--surface, #ffffff)",
                    color: filterLocality === loc ? "#ffffff" : "var(--text-muted, #6e6a62)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="properties-marketplace-grid">
          {filteredProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>

        <div className="housing-co-split-banner">
          <div>
            <h3 className="co-split-title">Have a flat in mind or found a listing?</h3>
            <p className="co-split-sub">
              Invite your prospective roommates to SettleMate to simulate split rent, check individual room allocations, and generate a shared move-in agreement.
            </p>
          </div>
          <a href="#move" className="co-split-btn">
            Calculate Split Rent →
          </a>
        </div>
      </div>
    </section>
  );
}
