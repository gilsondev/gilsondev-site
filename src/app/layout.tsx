import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Gilson Filho",
  description: "Site do desenvolvedor Gilson Filho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(merriweather.className, "bg-gray-100")}>
        {children}
      </body>
    </html>
  );
}
