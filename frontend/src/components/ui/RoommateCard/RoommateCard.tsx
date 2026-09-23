"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import "./RoommateCard.css";

export interface RoommateProfile {
  id: string;
  name: string;
  age: number;
  initials: string;
  avatarBg: string;
  location: string;
  city: string;
  timeline: string;
  occupation: string;
  occupationIcon: string;
  budget: string;
  matchScore: number;
  tags: string[];
  lookingFor: string;
  isOnline?: boolean;
}

interface RoommateCardProps {
  profile: RoommateProfile;
}

export default function RoommateCard({ profile }: RoommateCardProps) {
  const [connected, setConnected] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="roommate-card"
    >
      <div>
        <div className="roommate-card-header">
          <div className="roommate-profile-info">
            <div className="roommate-avatar-container">
              <div
                className="roommate-avatar"
                style={{ backgroundColor: profile.avatarBg }}
              >
                {profile.initials}
              </div>
              {profile.isOnline && <span className="roommate-online-dot" />}
            </div>
            <div>
              <h3 className="roommate-name">
                {profile.name}, {profile.age}
              </h3>
              <div className="roommate-location">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M12 21s-7-4.5-7-10.5A7 7 0 0112 3a7 7 0 017 7.5C19 16.5 12 21 12 21z" />
                  <circle cx="12" cy="10.5" r="2.2" />
                </svg>
                {profile.location} · {profile.timeline}
              </div>
            </div>
          </div>
          <div className="roommate-compat-badge">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {profile.matchScore}% Match
          </div>
        </div>

        <div className="roommate-bio-tag">
          <span>{profile.occupationIcon}</span>
          <span>{profile.occupation}</span>
        </div>

        <div className="roommate-stats-grid">
          <div className="roommate-stat-item">
            <span className="roommate-stat-label">Budget</span>
            <span className="roommate-stat-val">{profile.budget}</span>
          </div>
          <div className="roommate-stat-item">
            <span className="roommate-stat-label">Target City</span>
            <span className="roommate-stat-val">{profile.city}</span>
          </div>
        </div>

        <div className="roommate-tags">
          {profile.tags.map((tag) => (
            <span key={tag} className="roommate-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="roommate-looking-for">
          <span className="roommate-looking-highlight">Looking for: </span>
          {profile.lookingFor}
        </div>
      </div>

      <div className="roommate-card-footer">
        <button
          className={`roommate-btn-connect ${connected ? "connected" : ""}`}
          onClick={() => setConnected(!connected)}
        >
          {connected ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Request Sent
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M19 8v6M22 11h-6" />
              </svg>
              Connect
            </>
          )}
        </button>
        <button className="roommate-btn-view">View Profile</button>
      </div>
    </motion.div>
  );
}
