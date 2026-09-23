import React from "react";
import "./FieldRow.css";

interface FieldRowProps {
  label: string;
  value: string;
  className?: string;
}

export default function FieldRow({
  label,
  value,
  className = "",
}: FieldRowProps) {
  return (
    <div className={`field-row ${className}`}>
      <span className="field-row-label">{label}</span>
      <span className="field-row-value">{value}</span>
    </div>
  );
}
