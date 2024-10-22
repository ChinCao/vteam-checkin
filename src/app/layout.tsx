import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/AuthContext";
import Image from "next/image";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Silencio - Checkin",
  description: "Developed and all right reserved to VTEAM",
};

const PatrickHandSC = localFont({
  src: "../fonts/EB_Garamond/EBGaramond-VariableFont_wght.ttf",
  variable: "--font-PatrickHandSC",
});

const Road_Rage = localFont({
  src: "../fonts/Road_Rage/RoadRage-Regular.ttf",
  variable: "--font-RoadRage",
});

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
        <body className={`${PatrickHandSC.variable} ${Road_Rage.variable}`}>
          {children}
        </body>
        <a
          className={`${PatrickHandSC.variable} vectr-sponsor`}
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
