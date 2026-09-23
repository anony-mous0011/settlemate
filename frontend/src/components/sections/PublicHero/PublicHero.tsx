"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import "./PublicHero.css";

export default function PublicHero() {
  return (
    <section className="public-hero-section">
      <div className="public-hero-grid">
        {/* Left Side: Headline & Direct Two-Path Action */}
        <div>
          <span className="public-hero-eyebrow">Moving to a new city?</span>
          <h1 className="public-hero-heading">
            Find your people.
            <br />
            <span className="public-hero-highlight">Find your place.</span>
          </h1>
          <p className="public-hero-subtext">
            Tell us where you&rsquo;re going, what you need, and how you live. SettleMate helps you discover relevant people and places before you move.
          </p>

          <div className="public-hero-actions">
            <Link href="/signup?role=relocator" className="public-hero-btn-primary">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
              I&rsquo;m Moving
            </Link>
            <Link href="/get-started?side=place" className="public-hero-btn-secondary">
              I Have a Place
            </Link>
          </div>
        </div>

        {/* Right Side: Sophisticated Realistic Product Preview */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="public-preview-shell"
        >
          <div className="preview-top-bar">
            <div className="preview-destination-pill">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 21s-7-4.5-7-10.5A7 7 0 0112 3a7 7 0 017 7.5C19 16.5 12 21 12 21z" />
                <circle cx="12" cy="10.5" r="2.5" />
              </svg>
              Destination: Pune · Kharadi
            </div>
            <span className="preview-target-badge">Move-in: Oct 2026</span>
          </div>

          {/* Person Matched Row */}
          <div className="preview-person-row">
            <div className="preview-person-left">
              <div className="preview-person-avatar">AR</div>
              <div>
                <div className="preview-person-name">Aditi R., 23</div>
                <div className="preview-person-detail">UPSC Prep · Budget ₹12k–15k/mo</div>
              </div>
            </div>
            <span className="preview-compat-chip">94% Fit</span>
          </div>

          {/* Place Matched Row with Real Image */}
          <div className="preview-property-row">
            <div className="preview-property-thumb">
              <Image
                src="/pic1.jpg"
                alt="2BHK Kharadi Apartment"
                fill
                className="object-cover"
              />
            </div>
            <div className="preview-property-info">
              <div className="preview-property-title">
                2BHK Shared Flat · Near EON Free Zone
              </div>
              <div className="preview-property-meta">
                Kharadi · ₹14,500/mo Total
              </div>
              <div className="preview-split-badge">
                ₹7,250 / person split
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
