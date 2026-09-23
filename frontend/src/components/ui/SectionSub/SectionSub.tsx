import React, { ReactNode } from "react";
import "./SectionSub.css";

interface SectionSubProps {
  children: ReactNode;
  className?: string;
}

export default function SectionSub({
  children,
  className = "",
}: SectionSubProps) {
  return <p className={`section-sub ${className}`}>{children}</p>;
}
