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
          <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-1">
              {children}
            </main>
            <Footer/>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

//explicame que es y para que sirve:
//RootLayout: es el layout principal de toda tu aplicación.
//children: Es todo lo que se renderiza dentro del layout.
//React.ReactNode: Es un tipo de dato en React. 

//explicame los estilos: flex flex-col min-h-screen
//display: flex; Activa Flexbox. Permite controlar layout (alineación, distribución, etc.)
//flex-direction: column. Los elementos se acomodan verticalmente.
//min-height: 100vh. Altura mínima = toda la pantalla