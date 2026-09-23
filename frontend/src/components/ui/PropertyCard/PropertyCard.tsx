"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import "./PropertyCard.css";

export interface PropertyItem {
  id: string;
  title: string;
  propertyType: string;
  pricePerMonth: number;
  deposit: number;
  location: string;
  city: string;
  amenities: string[];
  availableDate: string;
  ownerName: string;
  ownerType: string;
  responseRate: string;
  imageSrc?: string;
  imageBgColor?: string;
  imageTag: string;
  roommatesNeeded: number;
}

interface PropertyCardProps {
  property: PropertyItem;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [saved, setSaved] = useState(false);
  const splitRent = Math.round(
    property.pricePerMonth / (property.roommatesNeeded + 1)
  );

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="property-card-comp"
    >
      <div
        className="property-img-box"
        style={{
          background: property.imageBgColor || "#1e293b",
        }}
      >
        {property.imageSrc && (
          <Image
            src={property.imageSrc}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="property-img-bg"
          />
        )}

        <div className="property-badge-top-left">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 9h8M8 13h5" />
          </svg>
          {property.imageTag}
        </div>

        <button
          className={`property-badge-top-right ${saved ? "saved" : ""}`}
          onClick={() => setSaved(!saved)}
          aria-label="Save property"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={saved ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>

        <div className="property-img-count">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          1/6
        </div>
      </div>

      <div className="property-body">
        <div className="property-price-row">
          <div>
            <span className="property-price-main">
              ₹{property.pricePerMonth.toLocaleString("en-IN")}
            </span>
            <span className="property-price-period">/month</span>
          </div>
          <span className="property-type-tag">{property.propertyType}</span>
        </div>

        <div className="property-split-calc">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          ₹{splitRent.toLocaleString("en-IN")}/person with{" "}
          {property.roommatesNeeded} roommate
          {property.roommatesNeeded > 1 ? "s" : ""}
        </div>

        <h4 className="property-title">{property.title}</h4>
        <div className="property-loc-text">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M12 21s-7-4.5-7-10.5A7 7 0 0112 3a7 7 0 017 7.5C19 16.5 12 21 12 21z" />
            <circle cx="12" cy="10.5" r="2.2" />
          </svg>
          {property.location}, {property.city} · Deposit ₹
          {property.deposit.toLocaleString("en-IN")}
        </div>

        <div className="property-amenities">
          {property.amenities.map((amenity) => (
            <span key={amenity} className="property-amenity-chip">
              {amenity}
            </span>
          ))}
        </div>

        <div className="property-owner-bar">
          <div className="property-owner-detail">
            <span className="property-owner-name">{property.ownerName}</span>
            <span className="property-owner-role">
              {property.ownerType} · {property.responseRate}
            </span>
          </div>
          <button className="property-btn-view">View Details →</button>
        </div>
      </div>
    </motion.div>
  );
}
