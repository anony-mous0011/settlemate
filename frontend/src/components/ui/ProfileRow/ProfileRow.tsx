import React, { ReactNode } from "react";
import Avatar from "../Avatar/Avatar";
import Chip from "../Chip/Chip";
import "./ProfileRow.css";

interface ProfileRowProps {
  initials: string;
  name: string;
  locality: string;
  meta: string;
  tags: string[];
  trailing: ReactNode;
  className?: string;
}

export default function ProfileRow({
  initials,
  name,
  locality,
  meta,
  tags,
  trailing,
  className = "",
}: ProfileRowProps) {
  return (
    <div className={`profile-row ${className}`}>
      <Avatar initials={initials} />
      <div className="profile-row-info">
        <div className="profile-row-header">
          <span className="profile-row-name">{name}</span>
        </div>
        <div className="profile-row-meta">
          <span className="profile-row-locality">{locality}</span> · {meta}
        </div>
        <div className="profile-row-tags">
          {tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </div>
      {trailing}
    </div>
  );
}
