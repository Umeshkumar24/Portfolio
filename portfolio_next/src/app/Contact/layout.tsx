import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Navigation/Nav";
import { Social } from "@/components/Navigation/Social";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "./favicon.ico",
  title: "UMESH KUMAR",
  description: "JOURNEY",
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
          <Social />
        </footer>
      </body>
    </html>
  )
}
