"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import SectionSub from "../../ui/SectionSub/SectionSub";
import "./ConnectSteps.css";

const steps = [
  {
    num: "01",
    title: "Send a Request",
    desc: "Reach out to someone whose move timeline, destination locality, and lifestyle preferences line up with yours.",
    demo: "💬 'Hi Aditi! Moving to Kharadi in Oct for UPSC too. Let’s connect!'",
  },
  {
    num: "02",
    title: "Mutual Acceptance",
    desc: "Both parties must agree before contact info or chat opens. No unsolicited spam or random group links.",
    demo: "🤝 Aditi accepted your connection request.",
  },
  {
    num: "03",
    title: "In-App Chat",
    desc: "Message directly within SettleMate. Share shortlisted properties, compare schedules, and agree on flat preferences.",
    demo: "💬 'Found a great 2BHK in Kharadi with ₹7,250 split. Check it out?'",
  },
  {
    num: "04",
    title: "Agree & Settle",
    desc: "Align on food habits, sleep routines, and guest policies before signing a lease with the property owner.",
    demo: "📋 Shared Living Checklist agreed (Non-smoking, study hours, bill split).",
  },
];

export default function ConnectSteps() {
  return (
    <section className="connect-steps-section">
      <div className="connect-steps-container">
        <Eyebrow>Step Three · Safe &amp; Mutual Connections</Eyebrow>
        <SectionTitle>Connect before you commit.</SectionTitle>
        <SectionSub>
          Nothing happens without both sides agreeing. Once connected, talk through living expectations and budget breakdowns before making any commitments.
        </SectionSub>

        <div className="connect-steps-grid">
          {steps.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="connect-step-card"
            >
              <div className="connect-step-badge">{s.num}</div>
              <h3 className="connect-step-title">{s.title}</h3>
              <p className="connect-step-desc">{s.desc}</p>
              <div className="connect-step-demo-box">{s.demo}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
