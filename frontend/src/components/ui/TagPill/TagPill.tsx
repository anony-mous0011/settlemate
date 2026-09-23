import React, { ReactNode } from "react";
import "./TagPill.css";

interface TagPillProps {
  children: ReactNode;
  className?: string;
}

export default function TagPill({ children, className = "" }: TagPillProps) {
  return <span className={`tag-pill ${className}`}>{children}</span>;
}
