import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio | Yssa Amigable",
  description: "My personal portfolio as a beginner showcasing my skills, experiences, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body 
        className={twMerge(
          inter.variable, 
          calistoga.variable, 
          "text-white antialiased bg-gray-950 font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
