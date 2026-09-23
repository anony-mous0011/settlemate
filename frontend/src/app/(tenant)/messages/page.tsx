"use client";

import React, { useState } from "react";
import { sampleConnections } from "@/lib/mockData";
import "./messages.css";

interface ChatMessage {
  id: string;
  sender: "user" | "other";
  text: string;
  time: string;
}

export default function MessagesPage() {
  const [activeConnId, setActiveConnId] = useState("c1");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m1",
      sender: "other",
      text: "Hey Aditi! I saw you are preparing for UPSC and moving in October. I am also relocating to Pune around the same time for Eon IT Park.",
      time: "10:15 AM",
    },
    {
      id: "m2",
      sender: "user",
      text: "Hi Karan! Yes, I need a study-friendly place in Kharadi with non-smoking roommates. What is your budget range?",
      time: "10:22 AM",
    },
    {
      id: "m3",
      sender: "other",
      text: "Checked out the 2BHK on Eon IT road — looks great! Total is ₹14,500 so ₹7,250 split each. Want to do a site visit this Saturday?",
      time: "10:42 AM",
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  const activeConn =
    sampleConnections.find((c) => c.id === activeConnId) ||
    sampleConnections[0];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        sender: "user",
        text: inputVal.trim(),
        time: "Just now",
      },
    ]);
    setInputVal("");
  };

  return (
    <div className="messages-page-wrap">
      <div>
        <h1 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.85rem", fontWeight: 500, color: "var(--navy, #121b2d)" }}>
          Direct Messages
        </h1>
        <p style={{ fontSize: "0.92rem", color: "var(--text-muted, #6e6a62)", marginTop: "0.2rem" }}>
          Coordinate flat visits, discuss living preferences, and settle in together.
        </p>
      </div>

      <div className="messages-chat-card">
        {/* Sidebar */}
        <div className="conversations-sidebar">
          <div className="sidebar-top">
            <h3 className="sidebar-title">Chats ({sampleConnections.length})</h3>
          </div>
          {sampleConnections.map((c) => (
            <div
              key={c.id}
              className={`conv-item ${c.id === activeConnId ? "active" : ""}`}
              onClick={() => setActiveConnId(c.id)}
            >
              <div
                className="conv-avatar"
                style={{ backgroundColor: c.user.avatarBg }}
              >
                {c.user.initials}
              </div>
              <div className="conv-info">
                <div className="conv-name-row">
                  <span className="conv-name">{c.user.name}</span>
                  <span className="conv-time">{c.lastMessageTime}</span>
                </div>
                <div className="conv-preview">{c.lastMessage}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Pane */}
        <div className="chat-main-pane">
          <div className="chat-header">
            <div className="chat-header-user">
              <div
                className="conv-avatar"
                style={{ backgroundColor: activeConn.user.avatarBg }}
              >
                {activeConn.user.initials}
              </div>
              <div>
                <h3 className="chat-header-name">
                  {activeConn.user.name} ({activeConn.user.location})
                </h3>
                <span className="chat-header-status">
                  <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }} />
                  Active · Matched for Pune
                </span>
              </div>
            </div>
          </div>

          <div className="chat-messages-area">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`msg-bubble ${
                  m.sender === "user" ? "outgoing" : "incoming"
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

          <form onSubmit={handleSend} className="chat-input-bar">
            <input
              type="text"
              className="chat-text-input"
              placeholder={`Message ${activeConn.user.name}...`}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit" className="chat-send-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
