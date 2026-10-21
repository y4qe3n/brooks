import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const analyticsDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MrBrooksDigital Marketing | Creative Digital Growth",
    template: "%s | MrBrooksDigital Marketing",
  },
  description:
    "Creative digital marketing, social media, paid advertising, content creation, website design, and growth strategy built to help brands stand out.",
  keywords: [
    "digital marketing",
    "social media marketing",
    "online advertising",
    "content creation",
    "website design",
    "digital growth strategy",
    "brand strategy",
  ],
  authors: [{ name: "MrBrooksDigital Marketing" }],
  creator: "MrBrooksDigital Marketing",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MrBrooksDigital Marketing",
    title: "Good Marketing. Big Energy. Real Growth.",
    description:
      "Creative digital marketing that helps brands earn attention, build connections, and create opportunities.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MrBrooksDigital Marketing — Good Marketing. Big Energy. Real Growth.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MrBrooksDigital Marketing",
    description: "Good marketing. Big energy. Real growth.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {analyticsDomain ? (
          <Script
            defer
            data-domain={analyticsDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
