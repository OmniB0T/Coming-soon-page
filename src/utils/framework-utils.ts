export const frameworks = [
  "electron",
  "chrome",
  "qwik",
  "mobile",
  "tailwind",
  "open",
  "vue",
  "safari",
  "svelte",
] as const;

export type Framework = (typeof frameworks)[number];
