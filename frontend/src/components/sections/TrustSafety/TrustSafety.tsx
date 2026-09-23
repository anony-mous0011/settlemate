"use client";

import React from "react";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import SectionSub from "../../ui/SectionSub/SectionSub";
import "./TrustSafety.css";

const trustItems = [
  {
    icon: "🛡️",
    title: "Privacy Controls",
    desc: "Your phone number and exact personal address are never displayed publicly. All initial conversations happen safely via platform requests and in-app chat.",
  },
  {
    icon: "📋",
    title: "Transparent Property Info",
    desc: "Direct owner information, clear rent-versus-deposit breakdowns, and authentic photos so you know exactly what to expect before visiting.",
  },
  {
    icon: "🤝",
    title: "Report & Safety Moderation",
    desc: "Community safety tools allow you to report or block inappropriate behavior immediately with fast review by our operations team.",
  },
];

export default function TrustSafety() {
  return (
    <section id="trust" className="trust-safety-section">
      <div className="trust-safety-container">
        <div className="trust-safety-header">
          <Eyebrow>Built for Peace of Mind</Eyebrow>
          <SectionTitle>Trust, safety, and mutual consent.</SectionTitle>
          <SectionSub>
            Moving to a new city with new people requires high trust. SettleMate is built around user privacy and transparent information.
          </SectionSub>
        </div>

        <div className="trust-safety-grid">
          {trustItems.map((item) => (
            <div key={item.title} className="trust-card">
              <div className="trust-icon-box">{item.icon}</div>
              <h4 className="trust-card-title">{item.title}</h4>
              <p className="trust-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
