import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import GAnalytics from "@/components/ganalytics";
import { ThemeProvider } from "./providers";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={clsx(merriweather.className, "bg-gray-100 dark:bg-gray-800")}
      >
        <GAnalytics />
        <ThemeProvider attribute="class" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
