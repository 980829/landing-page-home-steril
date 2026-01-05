import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Inter, Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Kemitraan - Home Steril (Landing Page Demo)",
  description: "Landing page kemitraan Home Steril.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
