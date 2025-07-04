import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akture - sports and actions live streaming",
  description: "Akture - sports and actions live streaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={twMerge(
          inter.className,
          "bg-gray-400 text-white antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
