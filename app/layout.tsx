import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "SHEHNAZ AHMED — Senior Full-Stack Developer",
  description: "Senior Full-Stack Developer specializing in MERN, MEAN, Python, AI integrations, and automation.",
  metadataBase: new URL("https://example.com"),
  openGraph: { title: "SHEHNAZ AHMED — Full-Stack Developer", description: "Scalable web applications, automation systems, and AI-powered solutions.", type: "website" },
  twitter: { card: "summary_large_image", title: "SHEHNAZ AHMED — Full-Stack Developer" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider>{children}</ThemeProvider></body></html>;
}
