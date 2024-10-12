import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Silencio - Checkin",
  description: "Developed and all right reserved to VTEAM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
