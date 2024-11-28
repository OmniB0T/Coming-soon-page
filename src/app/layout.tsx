import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OmniLink Desktop",
  description: "Desktop app launch waiting page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
