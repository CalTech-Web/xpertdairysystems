import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationSchema, LocalBusinessSchema, WebSiteSchema } from "@/components/Schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://xpertdairysystems.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Central Valley Dairy Equipment Service | XPERT Dairy Systems",
    template: "%s | XPERT Dairy Systems",
  },
  description:
    "Central Valley dairy equipment service from Tulare. Pump repair, separator and agitator service, fabrication, installation, and 24/7 emergency support. Call (559) 946-6131.",
  keywords: [
    "dairy equipment repair Central Valley",
    "manure pump repair Tulare",
    "separator maintenance dairy",
    "agitator service California",
    "dairy fabrication",
    "Tulare dairy service",
    "emergency dairy equipment service",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Central Valley Dairy Equipment Service | XPERT Dairy Systems",
    description:
      "XPERT Solutions. Stronger Dairies. Pump repair, separator and agitator service, fabrication, and emergency support across California's Central Valley.",
    url: SITE_URL,
    siteName: "XPERT Dairy Systems",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  authors: [{ name: "XPERT Dairy Systems Inc." }],
  category: "Agriculture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-xds-ink">
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
