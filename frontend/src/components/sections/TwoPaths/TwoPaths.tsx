"use client";

import React from "react";
import Link from "next/link";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import SectionSub from "../../ui/SectionSub/SectionSub";
import "./TwoPaths.css";

export default function TwoPaths() {
  return (
    <section id="paths" className="two-paths-section">
      <div className="two-paths-container">
        <div className="two-paths-header">
          <Eyebrow>Two Sides of One Marketplace</Eyebrow>
          <SectionTitle>Choose your path on SettleMate.</SectionTitle>
          <SectionSub>
            Whether you&rsquo;re moving across cities or managing properties, SettleMate bridges the gap between relocators and owners.
          </SectionSub>
        </div>

        <div className="two-paths-grid">
          {/* Path 1: Relocator */}
          <div className="path-card">
            <div>
              <span className="path-badge tenant">For Relocators &amp; Tenants</span>
              <h3 className="path-title">I&rsquo;m moving to a new city</h3>
              <p className="path-desc">
                Find compatible roommates going your way, connect safely in-app, and discover housing tailored to your shared preferences.
              </p>
              <ul className="path-perks-list">
                <li className="path-perk">
                  <span className="path-perk-bullet">✓</span> Location &amp; timeline matching first
                </li>
                <li className="path-perk">
                  <span className="path-perk-bullet">✓</span> Split-rent math on 2BHK/3BHK flats
                </li>
                <li className="path-perk">
                  <span className="path-perk-bullet">✓</span> Mutual consent before chat opens
                </li>
              </ul>
            </div>
            <Link href="/signup?role=relocator" className="path-btn tenant-btn">
              Find my people &amp; place →
            </Link>
          </div>

          {/* Path 2: Property Owner */}
          <div className="path-card owner-side">
            <div>
              <span className="path-badge owner">For Owners &amp; Brokers</span>
              <h3 className="path-title">I have a place to offer</h3>
              <p className="path-desc">
                List your PG, room, flat, or shared accommodation and discover tenant pairs actively searching in your locality with verified budgets.
              </p>
              <ul className="path-perks-list">
                <li className="path-perk">
                  <span className="path-perk-bullet">✓</span> Direct tenant enquiries, zero spam
                </li>
                <li className="path-perk">
                  <span className="path-perk-bullet">✓</span> Synchronized move-in dates
                </li>
                <li className="path-perk">
                  <span className="path-perk-bullet">✓</span> Discover people looking in your area
                </li>
              </ul>
            </div>
            <Link href="/get-started?side=place" className="path-btn owner-btn">
              List my property →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
