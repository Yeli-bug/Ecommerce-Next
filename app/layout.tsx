import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from '@clerk/nextjs'


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
    <ClerkProvider>
      <html lang="en">
        <body>
          <div>
            <Header/>
            <main className="min-h-screen">{children}</main>
            <Footer/>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
