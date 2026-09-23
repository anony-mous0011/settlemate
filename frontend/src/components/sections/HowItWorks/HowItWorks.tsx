"use client";

import React from "react";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import SectionSub from "../../ui/SectionSub/SectionSub";
import "./HowItWorks.css";

const steps = [
  {
    num: "01",
    title: "Tell us about your move",
    desc: "Set your destination city, target locality, budget range, move-in timeline, and habits.",
  },
  {
    num: "02",
    title: "Discover relevant people",
    desc: "Location and practical requirements come first, followed by lifestyle compatibility.",
  },
  {
    num: "03",
    title: "Connect safely",
    desc: "Send a connection request. Once mutually accepted, chat directly and plan together.",
  },
  {
    num: "04",
    title: "Find your place",
    desc: "Discover flats that fit your individual or shared group requirements with transparent details.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <Eyebrow>Simple 4-Step Process</Eyebrow>
          <SectionTitle>How SettleMate works.</SectionTitle>
          <SectionSub>
            A predictable, transparent journey from planning your move to settling into your new home.
          </SectionSub>
        </div>

        <div className="how-it-works-grid">
          {steps.map((step) => (
            <div key={step.num} className="how-step-card">
              <span className="how-step-num">{step.num}</span>
              <h4 className="how-step-title">{step.title}</h4>
              <p className="how-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
