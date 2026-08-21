import type { Metadata } from "next";
import localFont from "next/font/local";

import "./global.css";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const vazirmatn = localFont({
  src: [
    {
      path: "./assets/fonts/Vazirmatn/webfonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/Vazirmatn/webfonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/Vazirmatn/webfonts/Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./assets/fonts/Vazirmatn/webfonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "پایگاه تخصصی مسجد",
  description: "نسخه بازطراحی شده سامانه جامع مساجد",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-screen antialiased`}
    >
      <body  className="min-h-screen">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}