import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MarketLens AI -- AI-Powered Stock Price Prediction",
  description:
    "Analyze stock market trends and predict future prices with cutting-edge machine learning. Real-time data, interactive charts, and AI-driven forecasting in one powerful platform.",
  keywords: [
    "stock prediction",
    "AI trading",
    "machine learning",
    "stock analysis",
    "market analytics",
    "financial AI",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "MarketLens AI -- AI-Powered Stock Price Prediction",
    description:
      "Analyze stock market trends and predict future prices with cutting-edge machine learning.",
    type: "website",
    siteName: "MarketLens AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketLens AI -- AI-Powered Stock Price Prediction",
    description:
      "Analyze stock market trends and predict future prices with cutting-edge machine learning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
