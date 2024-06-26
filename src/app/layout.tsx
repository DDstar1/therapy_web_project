import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Nav_bar from "@/components/nav";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <NextUIProvider>
          <Toaster richColors />
          <Nav_bar />
          <div className="mt-[48px] overflow-hidden">{children}</div>
        </NextUIProvider>
      </body>
    </html>
  );
}
