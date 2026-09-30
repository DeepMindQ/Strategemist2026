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
  title: "Strategemist — Deep-Tech Innovation, Engineered for Outcomes",
  description:
    "Strategemist is an IP-led technology firm turning predictive analytics, AI, automation, and intelligent systems into scalable business outcomes.",
  keywords: [
    "Strategemist",
    "predictive analytics",
    "artificial intelligence",
    "automation",
    "intelligent systems",
    "digital transformation",
    "deep tech",
    "IP-led technology",
  ],
  authors: [{ name: "Strategemist" }],
  openGraph: {
    title: "Strategemist — Deep-Tech Innovation, Engineered for Outcomes",
    description:
      "IP-led technology firm turning predictive analytics, AI, automation, and intelligent systems into scalable business outcomes.",
    siteName: "Strategemist",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategemist",
    description:
      "IP-led technology firm turning predictive analytics, AI, automation, and intelligent systems into scalable business outcomes.",
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
