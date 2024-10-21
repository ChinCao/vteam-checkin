import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/AuthContext";
import Image from "next/image";

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
      <AuthProvider>
        <body>{children}</body>
        <a
          className="vectr-sponsor"
          href="https://www.facebook.com/vectr.vcp"
          target="_blank"
          rel="noopener"
        >
          Trang web này được phát triển và tài trợ bởi CLB VECTR
          <Image width={25} height={25} src="/vectr.webp" alt="Vectr logo" />
        </a>
      </AuthProvider>
    </html>
  );
}
