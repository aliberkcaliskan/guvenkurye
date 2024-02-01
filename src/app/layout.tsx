import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {getAnalytics} from "firebase/analytics";
import {initializeApp} from "firebase/app";
import "./globals.css";
const inter = Inter({subsets: ["latin"]});

const firebaseConfig = {
  apiKey: "AIzaSyCCkd7tVIxjbgiCNhgvummWnVJyywoHJEg",
  authDomain: "guven-kurye.firebaseapp.com",
  projectId: "guven-kurye",
  storageBucket: "guven-kurye.appspot.com",
  messagingSenderId: "472423439478",
  appId: "1:472423439478:web:f09213c4356e8ac8a7d357",
  measurementId: "G-H89WXZQ976",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
if (typeof window !== 'undefined') {
  getAnalytics(app);

}
export const metadata: Metadata = {
  title: "Güven Kurye - Hızlı ve Güvenilir Teslimat",
  description:
    "Güven Kurye, şehir içi hızlı paket teslimatı sağlayan bir kurye hizmetidir. Güvenli ve zamanında teslimatlarımızla, 1 noktadan diğer noktaya paketlerinizi güvenle ulaştırıyoruz.",
  keywords:
    "güven kurye, hızlı teslimat, şehir içi kurye, paket teslimatı, güvenilir kurye hizmeti",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
