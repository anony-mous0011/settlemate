"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./tenant-layout.css";

export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/dashboard" },
    { label: "People", href: "/people" },
    { label: "Places", href: "/places" },
    { label: "Connections", href: "/connections" },
    { label: "Messages", href: "/messages" },
    { label: "My Move", href: "/my-move" },
    { label: "Profile", href: "/profile" },
  ];

  return (
    <div className="tenant-shell">
      <header className="tenant-navbar">
        <div className="tenant-nav-container">
          <Link href="/dashboard" className="tenant-brand">
            <div className="tenant-logo-wrapper">
              <Image
                src="/logo -bg.png"
                alt="SettleMate Logo"
                width={72}
                height={56}
                className="tenant-logo-image"
                priority
              />
            </div>
            <span className="tenant-brand-title">
              Settle<span className="tenant-brand-dot">·</span>Mate
            </span>
          </Link>

          <nav className="tenant-nav-links">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`tenant-nav-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="tenant-nav-right">
            <Link href="/owner/dashboard" className="tenant-switch-btn">
              Switch to Owner Portal →
            </Link>
            <Link
              href="/profile"
              className="tenant-user-avatar"
              title="Aditi R. Profile"
            >
              AR
            </Link>
          </div>
        </div>
      </header>

      <main className="tenant-main-content">{children}</main>
    </div>
  );
}
