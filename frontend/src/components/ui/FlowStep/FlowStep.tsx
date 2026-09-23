"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import "./FlowStep.css";

interface FlowStepProps {
  num: string;
  label: string;
  desc: string;
  className?: string;
}

export default function FlowStep({
  num,
  label,
  desc,
  className = "",
}: FlowStepProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`flow-step ${className}`}
    >
      <div className="flow-step-num">{num}</div>
      <div className="flow-step-label">{label}</div>
      <div className="flow-step-desc">{desc}</div>
    </motion.div>
  );
}
