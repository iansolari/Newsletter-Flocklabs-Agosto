import type { Metadata } from "next";
import { Poppins, Newsreader } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "I+D en movimiento — Newsletter Flock Labs",
  description:
    "Newsletter mensual de I+D Flock Labs: iniciativas, encuentros y aprendizajes del equipo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
