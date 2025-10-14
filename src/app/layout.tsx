import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-200 relative`}
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
          <div className='backdrop-blur-md sticky top-0 transition-colors duration-200 z-50'>
            <div className='flex justify-between items-center max-w-4xl mx-auto'>
              <DarkModeToggle />
              <Navigation />
            </div>
          </div>
          <div className='max-w-2xl mx-auto'>
            {children}
          </div>
          
        </ThemeContextProvider>
      </body>
    </html>
  );
}