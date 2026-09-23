"use client";

import React from "react";
import Link from "next/link";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-card">
        <h2 className="final-cta-heading">Ready to settle in?</h2>
        <p className="final-cta-sub">
          Join thousands of young professionals, students, and property owners making city relocation effortless.
        </p>

        <div className="final-cta-buttons">
          <Link href="/signup?role=relocator" className="final-cta-btn-tenant">
            I&rsquo;m Moving
          </Link>
          <Link href="/get-started?side=place" className="final-cta-btn-owner">
            I Have a Place
          </Link>
        </div>
      </div>
    </section>
  );
}
