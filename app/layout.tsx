import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import {cn} from '@/lib/utils';
import "./globals.css";


const DM_SansFont = DM_Sans({ 
  subsets: ["latin"],
  weight:['300','400','500','700','900'],
  variable : '--font-sans'
});

export const metadata: Metadata = {
  title: "ProMedix",
  description: "A healthcare management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased' , DM_SansFont.variable)}>
        {children}
      </body>
    </html>
  );
}
