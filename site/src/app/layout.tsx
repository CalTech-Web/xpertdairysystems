import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    default: "XPERT Dairy Systems Inc. | Central Valley Dairy Equipment Service",
    template: "%s | XPERT Dairy Systems",
  },
  description:
    "Tulare based dairy equipment specialists. Pump repair, separator maintenance, agitator service, fabrication, and emergency support for dairies across California's Central Valley.",
  keywords: [
    "dairy equipment repair",
    "manure pump repair",
    "separator maintenance",
    "agitator service",
    "dairy fabrication",
    "Tulare dairy service",
    "Central Valley dairy",
  ],
  openGraph: {
    title: "XPERT Dairy Systems Inc.",
    description:
      "XPERT Solutions. Stronger Dairies. Central Valley dairy equipment service, repair, and fabrication.",
    url: SITE_URL,
    siteName: "XPERT Dairy Systems",
    type: "website",
  },
  robots: { index: true, follow: true },
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
