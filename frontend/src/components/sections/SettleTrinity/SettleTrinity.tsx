"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import SectionSub from "../../ui/SectionSub/SectionSub";
import "./SettleTrinity.css";

export default function SettleTrinity() {
  return (
    <section className="settle-trinity-section">
      <div className="settle-trinity-container">
        <div className="settle-trinity-header">
          <Eyebrow>The SettleMate Equation</Eyebrow>
          <SectionTitle>How moving on your own becomes settling together.</SectionTitle>
          <SectionSub>
            Traditional platforms separate flat hunting from roommate finding. SettleMate synchronizes your destination, your people, and your dream flat into one seamless move.
          </SectionSub>
        </div>

        <div className="settle-trinity-diagram">
          {/* STEP 1: YOUR MOVE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="trinity-node root"
          >
            <div className="trinity-node-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
              Step 1 · Your Destination
            </div>
            <div className="trinity-node-title">Moving to Pune · October 2026</div>
            <div className="trinity-node-desc">₹12k–15k Budget · Study/Work Focused in Kharadi &amp; Viman Nagar</div>
          </motion.div>

          {/* Connector Down */}
          <div className="trinity-connector-vertical">
            <span className="trinity-connector-pulse" />
          </div>

          {/* STEP 2 & 3: PEOPLE & PLACE */}
          <div className="trinity-branches-row">
            {/* Branch Left: Your People */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="trinity-node"
            >
              <div className="trinity-node-tag" style={{ color: "#0284c7" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                Step 2 · Your People
              </div>
              <div className="trinity-node-title">Matched with Aditi &amp; Karan</div>
              <div className="trinity-node-desc">
                94% Lifestyle Compatibility · Non-smokers, Early Risers, Same Move-in Week
              </div>
            </motion.div>

            {/* Branch Right: Your Place */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="trinity-node"
              style={{ display: "flex", gap: "1rem", alignItems: "center" }}
            >
              <div style={{ position: "relative", width: "70px", height: "70px", borderRadius: "10px", overflow: "hidden", flexShrink: 0 }}>
                <Image src="/pic1.jpg" alt="2BHK Kharadi Flat" fill className="object-cover" />
              </div>
              <div>
                <div className="trinity-node-tag" style={{ color: "#7c3aed" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  Step 3 · Your Shared Place
                </div>
                <div className="trinity-node-title" style={{ fontSize: "1.1rem" }}>2BHK Flat · Kharadi, Pune</div>
                <div className="trinity-node-desc">
                  Total ₹14,500/mo ➔ <strong>₹7,250 / person</strong>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Connector Down */}
          <div className="trinity-connector-vertical">
            <span className="trinity-connector-pulse" />
          </div>

          {/* STEP 4: SETTLE TOGETHER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="trinity-target"
          >
            <div className="trinity-target-eyebrow">✨ The SettleMate Outcome</div>
            <div className="trinity-target-title">Settle Together with Confidence</div>
            <div className="trinity-target-perks">
              <span className="trinity-perk-pill">🤝 Split Rent &amp; Deposit</span>
              <span className="trinity-perk-pill">📝 Shared Move-in Agreement</span>
              <span className="trinity-perk-pill">💬 Group Chat &amp; Bills Setup</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
