import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter, Montserrat } from 'next/font/google';
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Providers } from "@/components/providers";

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
  variable: "--font-mrs"
});
const inter = Inter({  
  subsets: ['latin'],
  display:'swap',
  variable: "--font-int"
});


export const metadata: Metadata = {
  title: "Aurno Blog App",
  description: "Aurno blog app is a static blog app created with next js, tailwindcss and markdown",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("font-inter antialiased", montserrat.variable, inter.variable)}>
        <Providers>
          <div className=" relative grid grid-rows-[auto_1fr_auto] min-h-dvh bg-background ">
            <Header />
            <main className="px-[15px] sm:px-0"> {children}</main>
            <Footer />
        </div>
        </Providers>
      </body>
    </html>
  );
}
