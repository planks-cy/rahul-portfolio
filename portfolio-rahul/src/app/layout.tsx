import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { PageLoader } from "@/components/layout/PageLoader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Rahul Kumar Sinha — Video Editor, Graphic & UI/UX Designer",
  description:
    "Portfolio of Rahul Kumar Sinha — an Electrical & Electronics Engineering student working across video editing, graphic design, and UI/UX design.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Rahul Kumar Sinha — Portfolio",
    description:
      "Video editing, graphic design, and UI/UX design — built with the same attention to detail as a circuit diagram.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-ink text-paper font-sans antialiased selection:bg-copper selection:text-ink">
        <PageLoader />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
