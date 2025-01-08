import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });
import { ChakraProvider } from "@chakra-ui/react";
export const metadata: Metadata = {
  title: "Medium",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/webpic.jpeg" />
      </head>
      <body className={inter.className}>
        {" "}
        <ChakraProvider>{children}</ChakraProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
