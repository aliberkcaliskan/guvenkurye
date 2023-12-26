import React from "react";
import {FaBus, FaCar, FaMedkit, FaMotorcycle, FaPlane} from "react-icons/fa";
import {
  WhyUs,
  AboutSection,
  FeedbackSection,
  Footer,
  Header,
  PackageCard,
  ServiceCard,
  ContactBanner,
  Banner,
} from "./component";
import {
  BannerData,
  ContactData,
  AboutData,
  FeedbackData,
  WhyUsData,
} from "./interface";
export default function Home() {
  const bannerData: BannerData = {
    title: "Güvenilir ve Hızlı Kurye Hizmeti",
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
        <div className="m-10">
          <div className="flex flex-wrap justify-center">
            <ServiceCard
              title="Moto Kurye"
              description="Hızlı ve çevik moto kuryelerle küçük paketlerinizi en hızlı şekilde teslim edin."
              icon={<FaMotorcycle className="text-4xl" />}
            />
            <ServiceCard
              title="Arabalı Kurye"
              description="Geniş araç filomuzla orta ölçekli gönderilerinizi güvenle taşıyoruz."
              icon={<FaCar className="text-4xl" />}
            />
            <ServiceCard
              title="Uçak Kargo"
              description="Uçak kargo hizmeti ile uluslararası gönderilerinizi hızlı ve güvenli bir şekilde teslim edin."
              icon={<FaPlane className="text-4xl" />}
            />
            <ServiceCard
              title="Otobüs Kargo"
              description="Ekonomik ve güvenli otobüs kargo ile büyük paketlerinizi taşıyoruz."
              icon={<FaBus className="text-4xl" />}
            />
            <ServiceCard
              title="Eczane Kargo"
              description="Eczane ürünlerinizin güvenli ve özenli bir şekilde taşınması için özel çözümler sunuyoruz."
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
            title="Standart Paket"
            description="Ekonomik ve hızlı bir çözüm arayanlar için Standart Paket idealdir. İş veya kişisel gönderilerinizi güvenle ve zamanında teslim edin."
            deliveryTime="1 gün"
            weightLimit="10"
            priceRange="100-200 TL"
          />
          <PackageCard
            title="Orta Paket"
            description="Esnek teslimat süreleri ve uygun fiyatlarla Orta Paket, orta ölçekli gönderileriniz için mükemmel bir seçenektir. İhtiyaçlarınıza uygun hızlı ve güvenilir bir çözüm."
            deliveryTime="Yarım gün"
            weightLimit="20"
            priceRange="200-400 TL"
          />
          <PackageCard
            title="Premium Paket"
            description="Acil teslimat gereksinimleri olanlar için en üst düzey hız ve özel hizmet sunan Premium Paket, iş veya kişisel gönderilerinizi 1-2 saat içerisinde hedefe ulaştırır."
            deliveryTime="1-2 saat"
            weightLimit="100"
            priceRange="500-2000 TL"
          />
        </div>
      </>
    );
  };

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
      </main>
    </>
  );
}
