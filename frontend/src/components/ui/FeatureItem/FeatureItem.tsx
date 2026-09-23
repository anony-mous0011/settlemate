"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import "./FeatureItem.css";

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  desc: string;
  className?: string;
}

export default function FeatureItem({
  icon,
  title,
  desc,
  className = "",
}: FeatureItemProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`feature-item ${className}`}
    >
      <div className="feature-item-icon">{icon}</div>
      <div className="feature-item-content">
        <h4 className="feature-item-title">{title}</h4>
        <p className="feature-item-desc">{desc}</p>
      </div>
    </motion.div>
  );
}
