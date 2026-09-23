"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./owner-layout.css";

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/owner/dashboard" },
    { label: "My Listings", href: "/owner/listings" },
    { label: "People Looking", href: "/owner/people" },
    { label: "Enquiries", href: "/owner/enquiries" },
    { label: "Messages", href: "/owner/messages" },
    { label: "Profile", href: "/owner/profile" },
  ];

  return (
    <div className="owner-shell">
      <header className="owner-navbar">
        <div className="owner-nav-container">
          <Link href="/owner/dashboard" className="owner-brand">
            <div className="owner-logo-wrapper">
              <Image
                src="/logo -bg.png"
                alt="SettleMate Logo"
                width={72}
                height={56}
                className="owner-logo-image"
                priority
              />
            </div>
            <span className="owner-brand-title">
              Settle<span className="owner-brand-dot">·</span>Mate
            </span>
          </Link>

          <nav className="owner-nav-links">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`owner-nav-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="owner-nav-right">
            <Link href="/dashboard" className="owner-switch-btn">
              Switch to Relocator Portal →
            </Link>
            <Link
              href="/owner/profile"
              className="owner-user-avatar"
              title="Rajesh Kulkarni (Owner)"
            >
              RK
            </Link>
          </div>
        </div>
      </header>

      <main className="owner-main-content">{children}</main>
    </div>
  );
}
