"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sampleConnections, ConnectionItem } from "@/lib/mockData";
import "./connections.css";

export default function ConnectionsPage() {
  const [connections, setConnections] = useState<ConnectionItem[]>(sampleConnections);

  const handleAccept = (id: string) => {
    setConnections(
      connections.map((c) => (c.id === id ? { ...c, status: "connected" } : c))
    );
  };

  return (
    <div className="connections-page-wrap">
      <div>
        <h1 className="conn-title">Your Connections</h1>
        <p className="conn-sub">
          Active roommate conversations, incoming relocation requests, and shared living notes.
        </p>
      </div>

      <div className="conn-grid">
        {connections.map((item) => (
          <div key={item.id} className="conn-card">
            <div>
              <div className="conn-card-header">
                <div className="conn-user-profile">
                  <div
                    className="conn-avatar"
                    style={{ backgroundColor: item.user.avatarBg }}
                  >
                    {item.user.initials}
                  </div>
                  <div>
                    <h3 className="conn-name">
                      {item.user.name}, {item.user.age}
                    </h3>
                    <div className="conn-meta">
                      📍 {item.user.location} · Moving {item.user.timeline}
                    </div>
                  </div>
                </div>

                <span
                  className={`conn-status-pill ${
                    item.status === "connected" ? "connected" : "pending"
                  }`}
                >
                  {item.status === "connected"
                    ? "Active Match"
                    : item.status === "pending_incoming"
                    ? "Pending Request"
                    : "Sent Request"}
                </span>
              </div>

              {item.lastMessage && (
                <div className="conn-message-box">
                  <span style={{ fontSize: "0.72rem", color: "#64748b", display: "block", marginBottom: "0.2rem" }}>
                    Last update {item.lastMessageTime}:
                  </span>
                  &ldquo;{item.lastMessage}&rdquo;
                </div>
              )}
            </div>

            <div className="conn-card-actions">
              {item.status === "pending_incoming" ? (
                <>
                  <button
                    onClick={() => handleAccept(item.id)}
                    style={{
                      flex: 1,
                      padding: "0.65rem 1rem",
                      borderRadius: "0.5rem",
                      backgroundColor: "var(--accent, #3d7a68)",
                      color: "#fff",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Accept &amp; Open Chat
                  </button>
                  <button
                    style={{
                      padding: "0.65rem 1rem",
                      borderRadius: "0.5rem",
                      border: "1px solid var(--border, #e3dfd4)",
                      backgroundColor: "transparent",
                      color: "#64748b",
                      cursor: "pointer",
                    }}
                  >
                    Decline
                  </button>
                </>
              ) : (
                <Link href="/messages" className="conn-btn-chat">
                  Open Direct Chat 💬
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
