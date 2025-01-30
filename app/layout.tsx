import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import News from "@/components/news/News";

// import "./app.css";

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
        <main className="px-2 md:px-16 md:py-2 text-textPrimary">
          <Navbar />
          <section className="md:flex space-x-4">
            {/* <News /> */}
            {children}
            <Sidebar />
          </section>
        </main>
      </body>
    </html>
  );
}
