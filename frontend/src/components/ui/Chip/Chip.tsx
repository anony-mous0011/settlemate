import React, { ReactNode } from "react";
import "./Chip.css";

interface ChipProps {
  children: ReactNode;
  className?: string;
}

export default function Chip({ children, className = "" }: ChipProps) {
  return <span className={`chip ${className}`}>{children}</span>;
}
