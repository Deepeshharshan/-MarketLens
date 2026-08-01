import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MarketLens AI — AI-Powered Stock Price Prediction",
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
  openGraph: {
    title: "MarketLens AI — AI-Powered Stock Price Prediction",
    description:
      "Analyze stock market trends and predict future prices with cutting-edge machine learning.",
    type: "website",
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
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
