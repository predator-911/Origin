import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Deterministic small hash used to derive stable visual variety (e.g. project
// cover patterns) from a string id, without any randomness or external assets.
export function hashToRange(input: string, min: number, max: number): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  const normalized = Math.abs(hash) % (max - min + 1);
  return min + normalized;
}
