import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MathToon | دنیای ماجراجویی ریاضی",
  description: "یادگیری شیرین ریاضی پنجم با داستان، انیمیشن و بازی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
