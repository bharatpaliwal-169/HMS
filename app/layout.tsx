import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import {cn} from '@/lib/utils';
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { siteData } from "@/constants/SiteData";


const DM_SansFont = DM_Sans({ 
  subsets: ["latin"],
  weight:['300','400','500','700','900'],
  variable : '--font-sans'
});

export const metadata: Metadata = {
  title: siteData.brandName,
  description: siteData.brandDesp,
  icons: {
    icon: siteData.brandLogo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased text-white' , DM_SansFont.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
