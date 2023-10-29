import clsx from "clsx";
import "../globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import GAnalytics from "@/components/ganalytics";
import { calculateExperienceYearsFromToday } from "@/lib/utils";
import { ThemeProvider } from "../providers";
import { notFound } from "next/navigation";
import { createTranslator, NextIntlClientProvider } from "next-intl";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });

  return {
    title: t("LocaleLayout.title"),
    description: t("LocaleLayout.description", {
      exp_years: calculateExperienceYearsFromToday(),
    }),
    metadataBase: new URL("https://gilsondev.in"),
    openGraph: {
      type: "website",
      title: t("LocaleLayout.title"),
      description: t("LocaleLayout.description", {
        exp_years: calculateExperienceYearsFromToday(),
      }),
      siteName: t("LocaleLayout.title"),
      images: [
        {
          url: "/avatar.png",
          width: 800,
          height: 600,
          alt: "Gilson Filho",
          type: "image/png",
        },
        {
          url: "/avatar.png",
          width: 1800,
          height: 1600,
          alt: "Gilson Filho",
          type: "image/png",
        },
      ],
      locale: "pt-BR",
    },
  };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ["en", "pt-BR"].map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={clsx(merriweather.className, "bg-gray-100 dark:bg-gray-800")}
      >
        <GAnalytics />
        <ThemeProvider attribute="class" enableSystem={false}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
