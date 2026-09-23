import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand-group">
          <div className="footer-logo-wrapper">
            <Image
              src="/logo -bg.png"
              alt="SettleMate Logo"
              width={60}
              height={48}
              className="footer-logo-image"
            />
          </div>
          <span className="footer-brand">
            Settle<span className="footer-brand-dot">·</span>Mate
          </span>
        </div>

        <div className="footer-tagline">
          Find your people. Find your place.
        </div>

        <div className="footer-links">
          <Link href="/login" className="footer-link">
            Log in
          </Link>
          <Link href="/get-started" className="footer-link">
            Get started
          </Link>
          <Link href="/dashboard" className="footer-link">
            Relocator Portal
          </Link>
          <Link href="/owner/dashboard" className="footer-link">
            Owner Portal
          </Link>
          <Link href="/broker/dashboard" className="footer-link">
            Broker Portal
          </Link>
          <a href="#trust" className="footer-link">
            Privacy &amp; Safety
          </a>
        </div>
      </div>
    </footer>
  );
}
