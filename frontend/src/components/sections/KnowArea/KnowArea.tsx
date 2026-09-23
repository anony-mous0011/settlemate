"use client";

import React, { useState } from "react";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import SectionSub from "../../ui/SectionSub/SectionSub";
import "./KnowArea.css";

const localityData: Record<
  string,
  {
    name: string;
    city: string;
    livabilityScore: string;
    metrics: { icon: string; title: string; desc: string }[];
  }
> = {
  Kharadi: {
    name: "Kharadi",
    city: "Pune",
    livabilityScore: "9.2/10 Livability Index",
    metrics: [
      {
        icon: "🚇",
        title: "Metro & Transport",
        desc: "Well connected by Ramwadi metro feeder buses and auto hubs. Direct road to Pune Airport (15 mins).",
      },
      {
        icon: "💼",
        title: "Work Access",
        desc: "Home to EON Free Zone & World Trade Center. Average commute < 10 mins on foot or bike.",
      },
      {
        icon: "📚",
        title: "Study & Coaching",
        desc: "Popular study libraries, 24/7 co-working cafes, and coaching centers within 2 km.",
      },
      {
        icon: "🛒",
        title: "Groceries & Markets",
        desc: "Reliance Smart, D-Mart, and Zepto/Blinkit delivery < 10 mins.",
      },
      {
        icon: "🏥",
        title: "Healthcare",
        desc: "Manipal Hospital and Columbia Asia within 5 mins emergency reach.",
      },
      {
        icon: "☕",
        title: "Lifestyle & Food",
        desc: "Vibrant food streets, tiffin meal services, and weekend social cafes.",
      },
    ],
  },
  "Viman Nagar": {
    name: "Viman Nagar",
    city: "Pune",
    livabilityScore: "9.4/10 Livability Index",
    metrics: [
      {
        icon: "🚇",
        title: "Metro & Airport",
        desc: "Direct Metro station access on Pune Metro Line 2. 5 minutes from Pune Airport.",
      },
      {
        icon: "🎓",
        title: "Colleges & Institutes",
        desc: "Symbiosis International University & design campuses within walking distance.",
      },
      {
        icon: "💼",
        title: "Business Parks",
        desc: "Giga Space and Phoenix Business Hubs right around the corner.",
      },
      {
        icon: "🛍️",
        title: "Shopping & Dining",
        desc: "Phoenix Marketcity, Dutta Mandir food walk, and high-energy cafes.",
      },
      {
        icon: "🏥",
        title: "Medical Clinics",
        desc: "Cloudnine and Apollo Clinic nearby with 24/7 pharmacy access.",
      },
      {
        icon: "🌳",
        title: "Parks & Greenery",
        desc: "Joggers Park and fitness clubs accessible throughout the locality.",
      },
    ],
  },
  Baner: {
    name: "Baner",
    city: "Pune",
    livabilityScore: "9.1/10 Livability Index",
    metrics: [
      {
        icon: "🚇",
        title: "High Street & Highway",
        desc: "Direct exit to Mumbai-Pune Expressway and Hinjawadi IT corridor.",
      },
      {
        icon: "💼",
        title: "Tech Corridors",
        desc: "20 min ride to Hinjawadi Phase 1, with shared cab pools popular among techies.",
      },
      {
        icon: "☕",
        title: "Cafes & Nightlife",
        desc: "Baner High Street features prime dining, co-working lounges, and fitness hubs.",
      },
      {
        icon: "🛒",
        title: "Supermarkets",
        desc: "Dorabjee's, Nature's Basket, and weekly organic farmer markets.",
      },
      {
        icon: "🏥",
        title: "Hospitals",
        desc: "Jupiter Hospital within 10 mins drive.",
      },
      {
        icon: "🏃",
        title: "Active Living",
        desc: "Baner Hill hiking trails and synthetic running tracks nearby.",
      },
    ],
  },
};

export default function KnowArea() {
  const [selectedArea, setSelectedArea] = useState("Kharadi");
  const areaInfo = localityData[selectedArea] || localityData.Kharadi;

  return (
    <section className="know-area-section">
      <div className="know-area-container">
        <div className="know-area-header">
          <div>
            <Eyebrow>Step Five · Locality Insights</Eyebrow>
            <SectionTitle>Know the area before you move.</SectionTitle>
            <SectionSub>
              Understand daily life in the locality you&rsquo;re moving to — commute times, grocery accessibility, study cafes, and lifestyle vibe.
            </SectionSub>
          </div>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            {["Kharadi", "Viman Nagar", "Baner"].map((area) => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                style={{
                  padding: "0.45rem 0.95rem",
                  borderRadius: "9999px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  border: "1px solid var(--border, #e3dfd4)",
                  backgroundColor:
                    selectedArea === area
                      ? "var(--navy, #16233f)"
                      : "var(--surface, #ffffff)",
                  color: selectedArea === area ? "#ffffff" : "var(--text-muted, #6e6a62)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        <div className="locality-insights-card">
          <div className="locality-insights-title">
            <span className="insights-city-badge">
              📍 {areaInfo.name}, {areaInfo.city}
            </span>
            <span className="insights-score-badge">
              {areaInfo.livabilityScore}
            </span>
          </div>

          <div className="know-area-grid">
            {areaInfo.metrics.map((m) => (
              <div key={m.title} className="know-area-metric-item">
                <div className="know-area-metric-icon">{m.icon}</div>
                <div>
                  <h4 className="know-area-metric-title">{m.title}</h4>
                  <p className="know-area-metric-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="know-area-disclaimer">
            Locality insights aggregate crowd-sourced data and verified municipal transport transit paths to help you choose the right neighborhood before signing a lease.
          </div>
        </div>
      </div>
    </section>
  );
}
