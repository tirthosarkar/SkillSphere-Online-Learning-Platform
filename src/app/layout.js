import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4'])


import {  Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";


const lexendFort = Lexend({
  subsets: ["latin"],
});


export const metadata = {
  title: "Skill Sphere | Online Learning Platform",
  description: "Learn web development and design from expert-led courses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${lexendFort.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <main>
          {children}
          <ToastContainer />
        </main>
        <Footer/>
      </body>
    </html>
  );
}
