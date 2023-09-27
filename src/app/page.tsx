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
      <main className="">
        <IntroSection />
        <Banner />
        <OverviewSection />

        {/* <MobileNav /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
