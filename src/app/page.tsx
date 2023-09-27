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
import NavBar from "@/components/ui/navBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="">
        <IntroSection />
        <Banner />

        <MobileNav />
      </main>
      {/* <Footer /> */}
    </>
  );
}
