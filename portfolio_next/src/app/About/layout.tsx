import { Nav } from "@/components/Navigation/Nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons:"./favicon.ico",
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
        <Nav/>
      </header>
      <div className="app">
        {children}
      </div>
      <footer>
      </footer>
    </body>
  </html>
  )
}
