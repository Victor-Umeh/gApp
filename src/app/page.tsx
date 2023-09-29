import {
  FeaturesSection,
  Footer,
  GallerySection,
  IntroSection,
  OverviewSection,
  PricesSection,
  SupportSection,
  Banner,
} from "@/components";
import MobileNav from "@/components/ui/mobileNav";

export default function Home() {
  return (
    <>
      <main className="font-open">
        <IntroSection />
        <Banner />
        <OverviewSection />
        <FeaturesSection />
        <GallerySection />
        <PricesSection />
        <SupportSection />
        <MobileNav />
      </main>
      <Footer />
    </>
  );
}
