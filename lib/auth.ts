export interface NovaUser {
  email: string;
  loggedIn: boolean;
}

const STORAGE_KEY = "novarhives_user";

export function getStoredUser(): NovaUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as NovaUser;
  } catch {
    return null;
  }
}

export function storeUser(user: NovaUser): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function getInitials(email: string): string {
  return email.substring(0, 2).toUpperCase();
}

export function getDisplayName(email: string): string {
  return email.split("@")[0];
}
