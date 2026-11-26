import type { Metadata } from "next";
import "./globals.css";

const description = "Explore paint protection film, ceramic coating, window tinting and car detailing in Neelambur, Coimbatore. A private design concept by Uploft Digital.";

export const metadata: Metadata = {
  title: "Luxi Automotive Care | Paint Protection & Detailing, Coimbatore",
  description,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    title: "Luxi Automotive Care | Protect the drive",
    description,
    siteName: "Luxi Automotive Care — Private Concept",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
