import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { AIAssistant } from "@/components/site/ai-assistant";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Strategemist — Beyond Consulting. Engineering the Future.",
  description:
    "Strategemist is an IP-led technology firm backed by 11 patents — engineering the future through quantum-inspired AI, intelligent systems, and enterprise transformation.",
  keywords: [
    "Strategemist", "deep tech", "AI consulting", "quantum computing",
    "intelligent systems", "digital transformation", "predictive analytics",
    "generative AI", "MLOps", "zero-trust security",
  ],
  authors: [{ name: "Strategemist Corporation" }],
  openGraph: {
    title: "Strategemist — Beyond Consulting. Engineering the Future.",
    description:
      "IP-led technology firm backed by 11 patents. Quantum-inspired AI, intelligent systems, and enterprise transformation.",
    siteName: "Strategemist", type: "website",
  },
  twitter: {
    card: "summary_large_image", title: "Strategemist",
    description: "IP-led technology firm backed by 11 patents. Beyond consulting—engineering the future.",
  },
  icons: { icon: "/logo.jpeg", apple: "/logo.jpeg" },
};

export const viewport: Viewport = {
  themeColor: "#2E2ED9",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="pt-[72px] min-h-screen">{children}</main>
        <Footer />
        <AIAssistant />
        <Toaster />
      </body>
    </html>
  );
}
