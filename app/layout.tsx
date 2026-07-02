import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Noise from "@/components/ui/Noise";

// Deliberately using a system font stack (defined in globals.css as CSS
// variables) rather than next/font/google: it keeps the build fully offline
// and dependency-free, with zero fetches to any third-party font service at
// build or runtime, matching the "no external dependencies" requirement.

export const metadata: Metadata = {
  title: "Lakshya Kumar, AI Systems Engineer",
  description:
    "Building intelligent systems that solve real-world problems. AI, machine learning, generative AI, LLM evaluation, and cloud-deployed products by Lakshya Kumar.",
  metadataBase: new URL("https://lakshyakumar.dev"),
  openGraph: {
    title: "Lakshya Kumar, AI Systems Engineer",
    description: "Building intelligent systems that solve real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-body bg-base text-ink antialiased selection:bg-signal-violet/30 selection:text-ink"
      >
        <Noise />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
