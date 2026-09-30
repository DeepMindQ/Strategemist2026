import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/site/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strategemist — Beyond Consulting. Engineering the Future.",
  description:
    "Strategemist is an IP-led technology firm backed by 11 patents. Beyond consulting—engineering the future through quantum-inspired AI, intelligent systems, and enterprise transformation.",
  keywords: [
    "Strategemist",
    "deep tech",
    "AI consulting",
    "quantum computing",
    "intelligent systems",
    "digital transformation",
    "predictive analytics",
    "generative AI",
    "MLOps",
    "zero-trust security",
  ],
  authors: [{ name: "Strategemist Corporation" }],
  openGraph: {
    title: "Strategemist — Beyond Consulting. Engineering the Future.",
    description:
      "IP-led technology firm backed by 11 patents. Quantum-inspired AI, intelligent systems, and enterprise transformation.",
    siteName: "Strategemist",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategemist",
    description:
      "IP-led technology firm backed by 11 patents. Beyond consulting—engineering the future.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
