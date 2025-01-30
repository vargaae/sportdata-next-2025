import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import Navbar from "@/app/components/navbar/Navbar";
// import Sidebar from "@/app/components/sidebar/Sidebar";
import News from "@/app/components/news/News";

import "./app.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SportDATA Web App",
  description:
    "Sport App fetches data from different API-s about sport championships, matches",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <News />
        {children}
        {/* <Sidebar /> */}
      </body>
    </html>
  );
}
