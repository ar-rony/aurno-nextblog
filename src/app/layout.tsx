import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"], display:"swap", variable: "--font-in" });
const manrope = Manrope({ subsets: ["latin"], display:"swap", variable: "--font-mr" });

export const metadata: Metadata = {
  title: "Aurno",
  description: "A Dynamic blog web app developed using next js and tailwind css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} container font-mr bg-light dark:bg-dark`}>
        <div className="flex flex-col min-h-screen px-5 sm:p-0">
          <Header />
          <div className="flex-1 flex items-center">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
