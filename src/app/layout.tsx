import "./globals.scss";
import type { Metadata } from "next";
import localFont from 'next/font/local';
import Footer from "@/components/footer/footer-component";
import Navbar from "@/components/nav-bar/navbar-component";


const nunito_sans = localFont({
  src: '../../public/fonts/NunitoSans-VariableFont.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={nunito_sans.className}>
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}