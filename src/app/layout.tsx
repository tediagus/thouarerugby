import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./ui/component/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thouaré Rugby",
  description: "Association sportive pour la pratique du rugby à Thouaré",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col">
          <div className="container mt-24 mx-auto px-12 py-4">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
