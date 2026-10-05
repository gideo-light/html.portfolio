import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VANTA TABLE — Fire. Time. Restraint.",
  description:
    "A Threeell Studio interactive restaurant concept exploring fire, seasonality and precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
