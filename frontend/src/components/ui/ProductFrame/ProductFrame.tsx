"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import "./ProductFrame.css";

interface ProductFrameProps {
  title: string;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function ProductFrame({
  title,
  right,
  children,
  className = "",
}: ProductFrameProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`product-frame ${className}`}
    >
      <div className="product-frame-header">
        <div className="product-frame-title">{title}</div>
        {right}
      </div>
      {children}
    </motion.div>
  );
}
