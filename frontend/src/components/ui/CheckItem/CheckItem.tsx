import React, { ReactNode } from "react";
import "./CheckItem.css";

interface CheckItemProps {
  children: ReactNode;
  className?: string;
}

export default function CheckItem({
  children,
  className = "",
}: CheckItemProps) {
  return (
    <li className={`check-item ${className}`}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="check-item-icon"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span>{children}</span>
    </li>
  );
}
