import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-brand">
          <div className="header-logo-wrapper">
            <Image
              src="/logo -bg.png"
              alt="SettleMate Logo"
              width={72}
              height={56}
              className="header-logo-image"
              priority
            />
          </div>
          <span className="header-brand-title">
            Settle<span className="header-brand-dot">·</span>Mate
          </span>
        </Link>

        <nav className="header-nav">
          <Link href="/#how-it-works" className="header-nav-link">
            How It Works
          </Link>
          <Link href="/#trust" className="header-nav-link">
            Trust &amp; Safety
          </Link>
          <Link href="/login" className="header-nav-link header-nav-login">
            Log in
          </Link>
          <Link href="/get-started" className="header-btn-get-started">
            Get started
          </Link>
        </nav>

        <div className="header-mobile-actions">
          <Link href="/login" className="header-mobile-login">
            Log in
          </Link>
          <Link href="/get-started" className="header-mobile-get-started">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
