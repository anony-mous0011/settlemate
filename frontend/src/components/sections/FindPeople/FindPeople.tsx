"use client";

import React, { useState } from "react";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import SectionSub from "../../ui/SectionSub/SectionSub";
import RoommateCard, { RoommateProfile } from "../../ui/RoommateCard/RoommateCard";
import "./FindPeople.css";

const sampleRoommates: RoommateProfile[] = [
  {
    id: "1",
    name: "Aditi",
    age: 23,
    initials: "AR",
    avatarBg: "#0284c7",
    location: "Kharadi",
    city: "Pune",
    timeline: "October 2026",
    occupation: "Preparing for UPSC",
    occupationIcon: "🎓",
    budget: "₹12k–15k/mo",
    matchScore: 94,
    tags: ["🌅 Early riser", "🚭 Non-smoker", "📖 Study-focused", "🌱 Vegetarian"],
    lookingFor: "1 female flatmate to share a quiet 2BHK in Kharadi",
    isOnline: true,
  },
  {
    id: "2",
    name: "Karan",
    age: 24,
    initials: "KM",
    avatarBg: "#059669",
    location: "Viman Nagar",
    city: "Pune",
    timeline: "October 2026",
    occupation: "Software Engineer @ Eon IT",
    occupationIcon: "💼",
    budget: "₹13k–16k/mo",
    matchScore: 91,
    tags: ["🎧 Quiet home", "🧹 Neat freak", "🍳 Loves cooking", "🏃 Runner"],
    lookingFor: "1-2 flatmates for a spacious 2BHK/3BHK near Eon Park",
    isOnline: true,
  },
  {
    id: "3",
    name: "Meera",
    age: 22,
    initials: "MS",
    avatarBg: "#7c3aed",
    location: "Baner",
    city: "Pune",
    timeline: "November 2026",
    occupation: "UX Designer @ Tech Hub",
    occupationIcon: "🎨",
    budget: "₹11k–14k/mo",
    matchScore: 89,
    tags: ["🐱 Pet friendly", "☕ Coffee lover", "💻 Remote work", "🌱 Plant mom"],
    lookingFor: "Friendly flatmate who enjoys a relaxed, creative home",
    isOnline: false,
  },
  {
    id: "4",
    name: "Rohit",
    age: 25,
    initials: "RK",
    avatarBg: "#d97706",
    location: "Kharadi",
    city: "Pune",
    timeline: "October 2026",
    occupation: "Financial Analyst",
    occupationIcon: "📊",
    budget: "₹14k–18k/mo",
    matchScore: 88,
    tags: ["🏋️ Gym enthusiast", "🚭 Non-smoker", "🚗 Has parking need"],
    lookingFor: "Working professional for gated society 2BHK",
    isOnline: true,
  },
  {
    id: "5",
    name: "Tanya",
    age: 23,
    initials: "TS",
    avatarBg: "#db2777",
    location: "Viman Nagar",
    city: "Pune",
    timeline: "October 2026",
    occupation: "Chartered Accountant",
    occupationIcon: "📈",
    budget: "₹12k–15k/mo",
    matchScore: 93,
    tags: ["🧘 Yoga lover", "🧹 Organised", "📖 Quiet evenings"],
    lookingFor: "Clean, non-smoking female roommate for 2BHK",
    isOnline: false,
  },
  {
    id: "6",
    name: "Siddharth",
    age: 26,
    initials: "SB",
    avatarBg: "#475569",
    location: "Hinjawadi",
    city: "Pune",
    timeline: "November 2026",
    occupation: "Product Manager",
    occupationIcon: "🚀",
    budget: "₹15k–20k/mo",
    matchScore: 87,
    tags: ["🥘 Foodie", "⚽ Weekend sports", "⚡ Fast Wi-Fi need"],
    lookingFor: "Tech professional to co-lease a premium 3BHK flat",
    isOnline: true,
  },
];

export default function FindPeople() {
  const [filterLocality, setFilterLocality] = useState("All");

  const filteredMovers =
    filterLocality === "All"
      ? sampleRoommates
      : sampleRoommates.filter((m) => m.location === filterLocality);

  return (
    <section id="discover" className="find-people-section">
      <div className="find-people-container">
        <div className="find-people-header-row">
          <div>
            <Eyebrow>Step Two · People-First Matchmaking</Eyebrow>
            <SectionTitle>Find people going your way.</SectionTitle>
            <SectionSub>
              SettleMate matches you on destination city, locality overlap, and move-in timeline first — then ranks by lifestyle habits (cleanliness, sleep schedules, food, and guests).
            </SectionSub>
          </div>

          <div className="find-people-filters">
            {["All", "Kharadi", "Viman Nagar", "Baner", "Hinjawadi"].map((loc) => (
              <button
                key={loc}
                className={`filter-pill-btn ${filterLocality === loc ? "active" : ""}`}
                onClick={() => setFilterLocality(loc)}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        <div className="roommates-grid">
          {filteredMovers.map((m) => (
            <RoommateCard key={m.id} profile={m} />
          ))}
        </div>

        <div className="find-people-cta-box">
          <div>
            <div className="find-people-cta-title">Don&rsquo;t see your exact locality?</div>
            <div className="find-people-cta-sub">
              More than 150+ new relocation profiles join every week across Pune, Bengaluru, and Mumbai.
            </div>
          </div>
          <a href="#move" className="find-people-cta-btn">
            Create Your Profile &amp; Get Matched →
          </a>
        </div>
      </div>
    </section>
  );
}
