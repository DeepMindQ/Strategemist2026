import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Sora, Comfortaa } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { AIAssistant } from "@/components/site/ai-assistant";
import { PipelineRail, StageLabel } from "@/components/site/pipeline-rail";
import { CustomCursor, StickyCta } from "@/components/site/cursor-sticky";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const comfortaa = Comfortaa({ variable: "--font-comfortaa", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "strategemist — Beyond Consulting. Engineering the Future.",
  description:
    "strategemist is an AI transformation intelligence platform backed by 11 patents. IP → Intelligence → Platforms → Transformation → Outcomes. No compromises.",
  keywords: [
    "strategemist", "AI transformation", "deep tech", "AI consulting", "quantum computing",
    "intelligent systems", "digital transformation", "predictive analytics", "MLOps",
  ],
  authors: [{ name: "Strategemist Corporation" }],
  alternates: { canonical: "https://strategemist.com" },
  metadataBase: new URL("https://strategemist.com"),
  openGraph: {
    title: "strategemist — Beyond Consulting. Engineering the Future.",
    description: "AI transformation intelligence platform backed by 11 patents. IP → Intelligence → Platforms → Transformation → Outcomes.",
    siteName: "strategemist", type: "website", url: "https://strategemist.com",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "strategemist" }],
  },
  twitter: {
    card: "summary_large_image", title: "strategemist",
    description: "AI transformation intelligence platform. IP → Outcomes. No compromises.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#2E2ED9", colorScheme: "dark" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Strategemist",
  url: "https://strategemist.com",
  description: "AI transformation intelligence platform backed by 11 patents.",
  email: "info@strategemist.com",
  slogan: "IP. Platforms. Outcomes. No Compromises.",
  knowsAbout: ["AI Transformation", "Quantum Computing", "Intelligent Systems", "MLOps", "Zero-Trust Security"],
  sameAs: ["https://www.youtube.com/@Strategemist", "https://x.com/strategemist", "https://www.linkedin.com/company/strategemist/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${comfortaa.variable} antialiased bg-background text-foreground`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CustomCursor />
        <Navbar />
        <PipelineRail />
        <StageLabel />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
        <AIAssistant />
        <StickyCta />
        <Toaster />
      </body>
    </html>
  );
}
