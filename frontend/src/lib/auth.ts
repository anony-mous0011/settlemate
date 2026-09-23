"use client";

export type UserRole = "relocator" | "owner" | "broker";

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  locality?: string;
}

const STORAGE_KEY = "settlemate_user_session";

export const DEFAULT_USERS: Record<UserRole, UserSession> = {
  relocator: {
    id: "rel-01",
    name: "Aditi R.",
    email: "aditi.r@example.com",
    role: "relocator",
    phone: "+91 98765 43210",
    locality: "Kharadi, Pune",
  },
  owner: {
    id: "own-01",
    name: "Rajesh Kulkarni",
    email: "rajesh.k@example.com",
    role: "owner",
    phone: "+91 98230 11223",
    locality: "Kharadi & Viman Nagar, Pune",
  },
  broker: {
    id: "brk-01",
    name: "Vikram Mehta",
    email: "vikram.m@settlemate.in",
    role: "broker",
    phone: "+91 99887 76655",
    locality: "East Pune Properties",
  },
};

export function getDashboardUrl(role: UserRole): string {
  switch (role) {
    case "relocator":
      return "/dashboard";
    case "owner":
      return "/owner/dashboard";
    case "broker":
      return "/broker/dashboard";
    default:
      return "/dashboard";
  }
}

export function getCurrentUser(): UserSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as UserSession;
  } catch {
    return null;
  }
}

export function setCurrentUser(user: UserSession): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function logout(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Authentication placeholder ready for backend FastAPI integration:
 * POST /api/v1/auth/login or fallback client storage.
 */
export async function loginUser(
  email: string,
  _password: string,
  preferredRole?: UserRole
): Promise<{ success: boolean; user: UserSession; redirectUrl: string }> {
  // Check if role can be inferred from existing demo users or preferred role
  let role: UserRole = preferredRole || "relocator";
  if (!preferredRole) {
    if (email.toLowerCase().includes("owner") || email.toLowerCase().includes("rajesh")) {
      role = "owner";
    } else if (email.toLowerCase().includes("broker") || email.toLowerCase().includes("vikram")) {
      role = "broker";
    }
  }

  const baseUser = DEFAULT_USERS[role];
  const user: UserSession = {
    ...baseUser,
    email: email || baseUser.email,
  };

  setCurrentUser(user);
  return {
    success: true,
    user,
    redirectUrl: getDashboardUrl(role),
  };
}

/**
 * Signup placeholder ready for backend FastAPI integration:
 * POST /api/v1/auth/register or fallback client storage.
 */
export async function registerUser(payload: {
  name: string;
  email: string;
  password?: string;
  role: UserRole;
  phone?: string;
}): Promise<{ success: boolean; user: UserSession; redirectUrl: string }> {
  const user: UserSession = {
    id: `usr-${Date.now()}`,
    name: payload.name.trim() || DEFAULT_USERS[payload.role].name,
    email: payload.email.trim() || DEFAULT_USERS[payload.role].email,
    role: payload.role,
    phone: payload.phone?.trim(),
    locality: "Pune",
  };

  setCurrentUser(user);
  return {
    success: true,
    user,
    redirectUrl: getDashboardUrl(payload.role),
  };
}
