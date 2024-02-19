"use client";
import React, {useEffect} from "react";
import {FaBus, FaCar, FaMedkit, FaMotorcycle, FaPlane} from "react-icons/fa";
import {
  AboutSection,
  Banner,
  ContactBanner,
  FeedbackSection,
  Footer,
  Header,
  PackageCard,
  ServiceCard,
  WhyUs,
} from "./component";
import PhoneCall from "./component/phoneCall";
import {
  AboutData,
  BannerData,
  ContactData,
  FeedbackData,
  WhyUsData,
} from "./interface";
import {getAnalytics} from "firebase/analytics";
import firebase from "./firebase";
export default function Home() {
  const bannerData: BannerData = {
    title: "1Güvenilir ve Hızlı Kurye Hizmeti",
    description:
      "Ürünlerinizi zamanında ve güvenle taşımak için buradayız. Hizmetlerimiz, hızlı teslimat, uygun fiyatlar ve müşteri memnuniyetini ön planda tutma prensipleriyle şekillenmiştir.",
  };

  const contactData: ContactData = {
    title: "Sorularınız mı Var?",
    description:
      "Bizimle iletişime geçin, size yardımcı olmaktan memnuniyet duyarız.",
    image: "/test.jpg",
  };

  const aboutData: AboutData = {
    title: "Hakkımızda",
    description:
      "Biz Güven Kurye, güvenilir ve hızlı kurye hizmetleri sunan bir şirket olarak 2011'den beri faaliyet gösteriyoruz. Misyonumuz, müşterilerimize en kaliteli kurye deneyimini yaşatmak ve iş süreçlerini kolaylaştırmaktır.",
    image: "/kargo-teslimati.webp",
    link: "/about",
  };

  const feedbackData: FeedbackData = {
    title: "Bizi Yorumlayın",
    description:
      "Müşteri memnuniyeti bizim için ön planda. Her türlü soru, öneri veya şikayetiniz için 7/24 müşteri hizmetlerimize ulaşabilirsiniz. Sizlere daha iyi hizmet sunabilmek için buradayız.",
  };

  const whyUsData: WhyUsData = {
    title: "Neden Biz?",
    description: [
      "Hızlı ve Güvenilir: Ürünleriniz zamanında ve güvenle teslim edilir.",
      "Esnek Fiyatlandırma: Teslim tarihine ve ürün boyutuna özel uygun fiyatlar.",
      "Güvenlik Garantisi: Kargo takip sistemi ve güvenli ödeme seçenekleri.",
      "Müşteri Desteği: Sorularınız için 7/24 canlı destek.",
    ],
    images: ["/banner-image.webp", "/pexels-photo-7363190.png"],
  };

  const Services: React.FC = () => {
    return (
      <>
        <div className="mx-auto lg:mt-20 mt-4 max-w-lg text-center">
          <h2 className="text-2xl lg:text-5xl lg:mb-6 font-bold uppercase italic mb-2">
            Hizmetlerimiz
          </h2>
          <p className="text-sm lg:text-xl p-4 ">
            Sunduğumuz kurye hizmetleri çeşitli ihtiyaçlara uygun olarak özel
            olarak tasarlanmıştır. Hızlı, güvenilir ve çeşitli taşıma
            seçenekleri ile müşterilerimize en iyi hizmeti sunmayı amaçlıyoruz.
            İşte kapsadığımız hizmet alanlarımız
          </p>
        </div>
        <div className="lg:m-10 m-5">
          <div className="flex flex-wrap justify-center">
            <ServiceCard
              title="Motorlu Kurye"
              description="Acil ve hızlı teslimat gereksinimlerinizi karşılamak amacıyla oluşturulmuş bir servistir. Doküman, paket, yedek parça, hediyeler veya motosikletle taşınabilen herhangi bir ürünü hızlı ve güvenilir bir biçimde taşımayı amaçlar. Bu hizmet, zamanın değerini bilen bireyler ve işletmeler için büyük bir güvenlik sunar."
              icon={<FaMotorcycle className="text-4xl" />}
            />
            <ServiceCard
              title="Arabalı Kurye"
              description="Motorsikletle taşınamayacak gönderilerin adresler arasında ulaştırılma teslimat seçeneğidir. Araçlı kurye hizmeti, günümüzde şehir yaşamının hızlı temposu içinde önemli bir gereklilik haline gelmiştir. Bu hizmet, özellikle şehir içindeki teslimatların hızlı ve güvenilir bir biçimde gerçekleştirilmesi için büyük bir öneme sahiptir.'"
              icon={<FaCar className="text-4xl" />}
            />
            <ServiceCard
              title="Uçak Kargo"
              description="
              Hava Kargo hizmetimiz, aynı gün içinde aşağıda belirtilen şehirler arasında, bir şehirdeki başlangıç adresinizden alınıp diğer bir şehirdeki hedef adrese teslimat sağlamaktadır.
          Gönderilen şehirdeki kuryelerimiz, hava kargo paketinizi havalimanından alarak istenilen teslimat adresine ulaştırmaktadır."
              icon={<FaPlane className="text-4xl" />}
            />
            <ServiceCard
              title="Otobüs Kargo"
              description=" İllerdeki OTOGAR KARGO şubeleri vasıtasıyla gerçekleştirilen teslimattır. Motorlu araç kurye, gönderiyi alıp Otogar kargo şubesine ulaştırdığı teslimatı kapsar."
              icon={<FaBus className="text-4xl" />}
            />
            <ServiceCard
              title="Eczane Kargo"
              description="İlaç ve tıbbi malzemelerin hızlı bir biçimde teslim edilmesini sağlar. Acil reçete sorunlarıyla başa çıkmak veya hastalara hızlı bir erişim sağlamak amacıyla kullanılan bir hizmettir. Nöbetçi eczanelerden ilacınızı alarak size en hızlı ulaşımı sağlayan bu 7/24 hizmet seçeneği, acil durumlar için ideal bir çözümdür."
              icon={<FaMedkit className="text-4xl" />}
            />
          </div>
        </div>
      </>
    );
  };

  const PackageCards: React.FC = () => {
    return (
      <>
        <div className="mx-auto lg:mt-20 mt-10 max-w-lg text-center  mb-2">
          <h2 className="text-2xl lg:text-5xl mb-3 lg:mb-6 font-bold uppercase italic">
            Paketlerimiz
          </h2>
          <p className="text-sm lg:text-xl p-4">
            Siz değerli müşterilerimiz, kurye hizmetimizde size özel sunulan üç
            farklı paket arasından seçim yapmak, ihtiyaçlarınıza uygun bir
            teslimat deneyimi yaşamak için önemli bir adımdır.
          </p>
        </div>
        <div className="flex flex-wrap md:space-x-12 justify-center px-4">
          <PackageCard
            title="Normal Kurye"
            description="İstanbul il sınırları içindeki iki adres arasındaki teslimat, Bu hizmet, iş saatleri içinde gerçekleşen ve ekonomik açıdan avantajlı bir teslimat seçeneğidir."
            deliveryTime="180-210 dakika"
            timeBeetwen="08:00-18:00"
            // priceRange="100-200 TL"
          />
          <PackageCard
            title="Acil Kurye"
            description="Belirlediğiniz konumlar arasındaki teslimat, Özellikle hızlı ulaşım gerektiren gönderiler için sıkça tercih edilen bir teslimat seçeneğidir."
            deliveryTime="90-120 dakika"
            timeBeetwen="08:00-22:00"
            // // priceRange="200-400 TL"
          />
          <PackageCard
            title="VIP Kurye"
            description="Adresler arasındaki en hızlı teslimat seçeneğidir. Gönderinizin en kısa sürede alınıp verilmesini sağlamak için tercih edebileceğiniz en hızlı seçenektir."
            deliveryTime="60 dakika"
            timeBeetwen="7/24"
            // priceRange="500-2000 TL"
          />
        </div>
      </>
    );
  };

  useEffect(() => {
    // Bu blok yalnızca tarayıcıda çalışır
    if (typeof window !== "undefined") {
      const analytics: any = getAnalytics(firebase);
    }
  }, []);

  return (
    <>
      <main>
        <Header />
        <Banner title={bannerData.title} description={bannerData.description} />
        <PackageCards />
        <WhyUs data={whyUsData} />
        <Services />
        <ContactBanner {...contactData} />
        <AboutSection {...aboutData} />
        <FeedbackSection {...feedbackData} />
        <Footer />
        <PhoneCall />
      </main>
    </>
  );
}
