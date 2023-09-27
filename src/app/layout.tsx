import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-open-sans",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Gupa",
  description: "Social connection platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${roboto.variable}`}>
      <body className="font-open">{children}</body>
    </html>
  );
}
