import React from "react";
import "./Avatar.css";

interface AvatarProps {
  initials: string;
  className?: string;
}

export default function Avatar({ initials, className = "" }: AvatarProps) {
  return <div className={`avatar ${className}`}>{initials}</div>;
}
