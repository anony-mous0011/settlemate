import React, { ReactNode } from "react";
import "./Eyebrow.css";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return <div className={`eyebrow ${className}`}>{children}</div>;
}
