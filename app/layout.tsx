import type { Metadata } from "next";
import "./globals.css";

import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"

import { ThemeProvider } from "@/components/theme-provider"

import { SiteHeader } from "@/components/ui/site-header"
import { SiteFooter } from "@/components/ui/site-footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: "LeetCode Board",
  description: "Whiteboard for LeetCode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={fontSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          < SiteHeader />
          {children}
          < SiteFooter />
          {/* <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}