"use client";

import React, { useState } from "react";
import { sampleEnquiries } from "@/lib/mockData";
import "./owner-messages.css";

interface OwnerChatMessage {
  id: string;
  sender: "owner" | "tenant";
  text: string;
  time: string;
}

export default function OwnerMessagesPage() {
  const [activeEnquiryId, setActiveEnquiryId] = useState("e1");
  const [messages, setMessages] = useState<OwnerChatMessage[]>([
    {
      id: "om1",
      sender: "tenant",
      text: "Namaste Rajesh ji, Aditi and Karan here. We both are moving in October (Kharadi) and loved your 2BHK flat listing near EON IT park.",
      time: "11:15 AM",
    },
    {
      id: "om2",
      sender: "owner",
      text: "Namaste Aditi. Yes, the flat is on the 8th floor with east-facing balcony and modular kitchen. The total rent is ₹14,500/month with 2 months deposit.",
      time: "11:30 AM",
    },
    {
      id: "om3",
      sender: "tenant",
      text: "That fits our combined budget perfectly (₹7,250 each). Can we visit this Saturday around 11 AM to see the flat?",
      time: "11:42 AM",
    },
    {
      id: "om4",
      sender: "owner",
      text: "Saturday 11 AM works well. I will be at the society gate. See you then!",
      time: "11:45 AM",
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  const activeEnquiry =
    sampleEnquiries.find((e) => e.id === activeEnquiryId) ||
    sampleEnquiries[0];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        sender: "owner",
        text: inputVal.trim(),
        time: "Just now",
      },
    ]);
    setInputVal("");
  };

  return (
    <div className="owner-messages-wrap">
      <div>
        <h1 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.85rem", fontWeight: 500, color: "var(--navy, #121b2d)" }}>
          Owner In-App Messenger
        </h1>
        <p style={{ fontSize: "0.92rem", color: "var(--text-muted, #6e6a62)", marginTop: "0.2rem" }}>
          Communicate with pre-matched tenant groups, coordinate physical visits, and agree on tenancy terms.
        </p>
      </div>

      <div className="owner-chat-card">
        {/* Sidebar */}
        <div className="owner-conv-sidebar">
          <div className="owner-sidebar-top">
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--navy, #121b2d)" }}>
              Tenant Inquiries ({sampleEnquiries.length})
            </h3>
          </div>
          {sampleEnquiries.map((enq) => (
            <div
              key={enq.id}
              className={`owner-conv-item ${
                enq.id === activeEnquiryId ? "active" : ""
              }`}
              onClick={() => setActiveEnquiryId(enq.id)}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#0284c7",
                  color: "#fff",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {enq.tenantInitials[0]}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--navy, #121b2d)" }}>
                    {enq.tenantNames.join(" & ")}
                  </span>
                  <span style={{ fontSize: "0.7rem", color: "#64748b" }}>{enq.timestamp.split(",")[0]}</span>
                </div>
                <div style={{ fontSize: "0.78rem", color: "#64748b", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {enq.propertyTitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Pane */}
        <div className="owner-chat-pane">
          <div className="owner-chat-header">
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy, #121b2d)" }}>
                {activeEnquiry.tenantNames.join(" & ")}
              </h3>
              <span style={{ fontSize: "0.78rem", color: "#059669", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }} />
                Target Move-in: {activeEnquiry.moveInTarget} · {activeEnquiry.propertyTitle}
              </span>
            </div>
          </div>

          <div className="owner-chat-messages-area">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`owner-msg-bubble ${
                  m.sender === "owner" ? "outgoing" : "incoming"
                }`}
              >
                <div>{m.text}</div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    textAlign: "right",
                    marginTop: "0.3rem",
                    opacity: 0.8,
                  }}
                >
                  {m.time}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="owner-chat-input-bar">
            <input
              type="text"
              placeholder="Type your response to tenants..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              style={{
                flex: 1,
                padding: "0.75rem 1rem",
                borderRadius: "0.6rem",
                border: "1px solid var(--border, #e3dfd4)",
                fontSize: "0.9rem",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "0.75rem 1.4rem",
                borderRadius: "0.6rem",
                backgroundColor: "var(--navy, #121b2d)",
                color: "#ffffff",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
