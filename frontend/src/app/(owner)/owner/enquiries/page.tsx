"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sampleEnquiries, EnquiryItem } from "@/lib/mockData";
import "./owner-enquiries.css";

export default function OwnerEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>(sampleEnquiries);

  const handleStatusChange = (
    id: string,
    newStatus: EnquiryItem["status"]
  ) => {
    setEnquiries(
      enquiries.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
    );
  };

  return (
    <div className="owner-enquiries-wrap">
      <div className="enquiries-header">
        <div>
          <h1 className="enquiries-title">Tenant Enquiries</h1>
          <p className="enquiries-sub">
            Inbound inquiries from pre-aligned tenant groups with synchronized move-in timelines.
          </p>
        </div>
      </div>

      <div className="enquiries-list">
        {enquiries.map((enq) => (
          <div key={enq.id} className="enquiry-card">
            <div className="enquiry-card-top">
              <div className="enquiry-tenant-group">
                <div className="enquiry-avatar-stack">
                  {enq.tenantInitials.map((init, i) => (
                    <div
                      key={init}
                      className="enquiry-avatar"
                      style={{ backgroundColor: i === 0 ? "#0284c7" : "#059669" }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy, #121b2d)" }}>
                    {enq.tenantNames.join(" & ")}
                  </div>
                  <div className="enquiry-property-target">
                    Inquiry for: <strong>{enq.propertyTitle}</strong> · {enq.timestamp}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "9999px",
                    backgroundColor: "#eff6ff",
                    color: "#1e40af",
                  }}
                >
                  {enq.budget}
                </span>

                <select
                  value={enq.status}
                  onChange={(e) =>
                    handleStatusChange(enq.id, e.target.value as EnquiryItem["status"])
                  }
                  className="enquiry-status-select"
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Viewing Scheduled">Viewing Scheduled</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </div>

            <div className="enquiry-msg-box">
              &ldquo;{enq.message}&rdquo;
            </div>

            <div className="enquiry-footer-row">
              <div style={{ fontSize: "0.82rem", color: "#64748b" }}>
                Target Move-in Date: <strong>{enq.moveInTarget}</strong>
              </div>

              <Link
                href="/owner/messages"
                style={{
                  padding: "0.6rem 1.25rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "var(--navy, #121b2d)",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Reply in Messenger 💬
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
