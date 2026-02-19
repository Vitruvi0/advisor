import type { Metadata } from "next";
import { spaceGrotesk, inter } from "@/lib/fonts";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advisor | We Don't Digitize. We Revolutionize.",
  description:
    "Custom software. High-performance web. AI automation. One team. Measurable outcomes. Advisor is the integrated technology partner the mid-market has been missing.",
  keywords: [
    "custom software development",
    "AI automation",
    "high-performance web",
    "digital transformation",
    "AI agents",
  ],
  icons: [],
  openGraph: {
    title: "Advisor | We Don't Digitize. We Revolutionize.",
    description:
      "Custom software. High-performance web. AI automation. One team. Measurable outcomes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
