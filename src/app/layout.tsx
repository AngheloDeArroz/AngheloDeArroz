import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./animations.css";

const stackSans = localFont({
  src: "../../public/font/StackSansText-VariableFont_wght.ttf",
  variable: "--font-stack-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anghelo DeArroz",
  description: "Anghelo DeArroz's Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${stackSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
