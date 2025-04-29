import {Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight:['400','500','600','700']
});



export const metadata = {
  title: "StreamVibe",
  description: "StreamVibe is a movie stream website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} antialiased bg-background`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
