import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Dock } from "@/components/Navigation/Dock";
import { Nav } from "@/components/Navigation/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons:"./favicon.ico",
  title: "UMESH KUMAR",
  description: "DEVELOPER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
    <body>
      <header>
        <Nav />
      </header>
      <div className="app">
        {children}
      </div>
      <footer>
        <Dock />
      </footer>
    </body>
  </html>
  )
}
