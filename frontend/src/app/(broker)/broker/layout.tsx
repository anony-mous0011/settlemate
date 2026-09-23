"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./broker-layout.css";

export default function BrokerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/broker/dashboard" },
    { label: "Managed Inventory", href: "/owner/listings" },
    { label: "Active Movers", href: "/owner/people" },
    { label: "Client Enquiries", href: "/owner/enquiries" },
    { label: "Messages", href: "/owner/messages" },
  ];

  return (
    <div className="broker-shell">
      <header className="broker-navbar">
        <div className="broker-nav-container">
          <Link href="/broker/dashboard" className="broker-brand">
            <div className="broker-logo-wrapper">
              <Image
                src="/logo -bg.png"
                alt="SettleMate Logo"
                width={72}
                height={56}
                className="broker-logo-image"
                priority
              />
            </div>
            <span className="broker-brand-title">
              Settle<span className="broker-brand-dot">·</span>Mate
              <span className="broker-brand-badge">Broker</span>
            </span>
          </Link>

          <nav className="broker-nav-links">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`broker-nav-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="broker-nav-right">
            <Link href="/dashboard" className="broker-switch-btn">
              Switch to Relocator Portal →
            </Link>
            <div className="broker-user-avatar" title="Vikram Mehta (Broker)">
              VM
            </div>
          </div>
        </div>
      </header>

      <main className="broker-main-content">{children}</main>
    </div>
  );
}
