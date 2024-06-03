import type {Metadata} from "next";
import {Inter} from "next/font/google";
import firebase from "./firebase";
import {getAnalytics} from "firebase/analytics";
import "./globals.css";
import Head from "next/head";
const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Güven Kurye - Hızlı ve Güvenilir Teslimat",
  description:
    "Güven Kurye, şehir içi hızlı paket teslimatı sağlayan bir kurye hizmetidir. Güvenli ve zamanında teslimatlarımızla, 1 noktadan diğer noktaya paketlerinizi güvenle ulaştırıyoruz.",
  keywords:
    "güven kurye, hızlı teslimat, şehir içi kurye, paket teslimatı, güvenilir kurye hizmeti,acil kurye, güvenli kurye,",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  if (typeof window !== "undefined") {
    const analytics = getAnalytics(firebase);
  }

  return (
    <html lang="tr">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H89WXZQ976"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H89WXZQ976');
          `,
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
