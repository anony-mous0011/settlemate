"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import FieldRow from "../../ui/FieldRow/FieldRow";
import "./ForOwners.css";

export default function ForOwners() {
  return (
    <section id="for-owners" className="for-owners-section">
      <div className="for-owners-container">
        <div className="for-owners-card">
          <div className="for-owners-grid">
            <div>
              <div className="for-owners-eyebrow">
                For Property Owners &amp; Brokers
              </div>
              <h2 className="for-owners-title">Have a place to offer?</h2>
              <p className="for-owners-desc">
                List your PG, room, flat, or shared accommodation and connect with pre-grouped tenants who are actively moving to your area with verified budgets.
              </p>

              <div className="for-owners-perks">
                <div className="for-owners-perk-item">
                  <span>✓</span> Direct connection with active relocation candidates
                </div>
                <div className="for-owners-perk-item">
                  <span>✓</span> Zero spam calls — talk only to matched tenant pairs
                </div>
                <div className="for-owners-perk-item">
                  <span>✓</span> Fast occupancy with synchronized move-in timelines
                </div>
              </div>

              <div className="for-owners-actions">
                <a href="#move" className="for-owners-btn">
                  List Your Property Free →
                </a>
              </div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="for-owners-preview-box"
            >
              <div style={{ position: "relative", height: "130px", width: "100%", borderRadius: "0.75rem", overflow: "hidden", marginBottom: "1rem" }}>
                <Image src="/pic4.jpg" alt="Owner Property Preview" fill className="object-cover" />
                <span style={{ position: "absolute", top: "8px", left: "8px", background: "rgba(15, 23, 42, 0.85)", color: "#fff", padding: "3px 8px", borderRadius: "9999px", fontSize: "0.72rem", fontWeight: 700, backdropFilter: "blur(4px)" }}>
                  📸 Listed 2 hours ago
                </span>
              </div>

              <div className="owner-preview-header">
                <span className="owner-preview-title">Live Listing Simulation</span>
                <span className="owner-match-indicator">🟢 8 Tenant Matches</span>
              </div>
              <FieldRow label="Property Type" value="2BHK Shared Flat" />
              <FieldRow label="Locality" value="Kharadi, Pune" />
              <FieldRow label="Monthly Rent" value="₹14,500/mo" />
              <FieldRow label="Security Deposit" value="₹29,000 (2 months)" />
              <FieldRow label="Matched Movers" value="Aditi R. &amp; Karan M." />
              <FieldRow label="Target Move Date" value="October 1, 2026" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
