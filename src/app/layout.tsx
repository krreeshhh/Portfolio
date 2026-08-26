import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/Navigation";
import DarkModeToggle from "@/components/DarkModeToggle";
import { ThemeContextProvider } from "@/contexts/ThemeContextProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crish.vercel.app"),
  title: {
    default: "Krish",
    template: "%s | Krishna Prasath",
  },
  description:
    "Where logic codes with imagination — this is my playground.",
  keywords: [
    "Krishna",
    "Krishna Prasath",
    "Krish",
    "Developer",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Krishna Prasath", url: "https://crish.vercel.app" }],
  creator: "Krishna Prasath",
  publisher: "Krishna Prasath",
  category: "technology",
  alternates: {
    canonical: "https://crish.vercel.app",
  },
  openGraph: {
    title: "Krishna Prasath | Developer",
    description:
      "Developer portfolio of Krishna Prasath — building fast, accessible, beautiful web apps.",
    url: "https://crish.vercel.app",
    siteName: "Krishna Prasath",
    images: [
      {
        url: "https://crish.vercel.app/Main.webp",
        width: 1200,
        height: 630,
        alt: "Krishna Prasath — Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Prasath | Developer",
    description:
      "Developer portfolio of Krishna Prasath — building fast, accessible, beautiful web apps.",
    images: ["https://crish.vercel.app/Main.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased transition-colors duration-200 relative`}
      >
        <Script id="ld-json-person" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Krishna Prasath",
              url: "https://crish.vercel.app",
              jobTitle: "Developer",
              image: "https://crish.vercel.app/Main.webp",
              sameAs: [
                // Add your profiles for stronger entity signals
              ],
            }),
          }}
        />
        <Script id="ld-json-website" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Krishna Prasath",
              url: "https://crish.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.google.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <ThemeContextProvider>
          <div className='sticky top-0 z-50 w-full pt-4 px-4 md:px-8 transition-colors duration-300 pointer-events-none'>
            <div className='flex justify-between items-center max-w-3xl mx-auto px-2 md:px-4 h-14 border border-neutral-200/25 dark:border-neutral-800/40 bg-neutral-100/60 dark:bg-black/60 backdrop-blur-xl rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)] pointer-events-auto'>
              <DarkModeToggle />
              <Navigation />
            </div>
          </div>
          <div className='max-w-3xl mx-auto px-4 md:px-8 py-10 relative z-10'>
            {children}
          </div>
          
          {/* Ambient background glow orbs */}
          <div className='fixed inset-0 -z-0 overflow-hidden pointer-events-none'>
            <div className='absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-indigo-500/10 to-teal-500/10 blur-[130px] dark:from-indigo-950/15 dark:to-teal-950/15 transition-colors duration-300' />
            <div className='absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-[130px] dark:from-purple-950/15 dark:to-pink-950/15 transition-colors duration-300' />
            <div className='absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-blue-500/5 to-cyan-500/5 blur-[120px] dark:from-blue-950/10 dark:to-cyan-950/10 transition-colors duration-300' />
          </div>
          
        </ThemeContextProvider>
      </body>
    </html>
  );
}