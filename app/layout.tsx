import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Diseños Emperador",
  description: "Uniformes escolares y deportivos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={"Quicksand, sans-serif" /* ${geistSans.variable} ${geistMono.variable} */ }
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
