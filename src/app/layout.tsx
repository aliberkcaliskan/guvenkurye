import type {Metadata} from "next";
import {Inter} from "next/font/google";
import firebase from "./firebase";
import {getAnalytics} from "firebase/analytics";

import "./globals.css";
const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "ali",
  description:
    "Güven Kurye, şehir içi hızlı paket teslimatı sağlayan bir kurye hizmetidir. Güvenli ve zamanında teslimatlarımızla, 1 noktadan diğer noktaya paketlerinizi güvenle ulaştırıyoruz.",
  keywords:
    "güven kurye, hızlı teslimat, şehir içi kurye, paket teslimatı, güvenilir kurye hizmeti",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  if (typeof window !== "undefined") {
    const analytics = getAnalytics(firebase);
  }

  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
