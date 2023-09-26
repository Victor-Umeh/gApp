import {
  FeaturesSection,
  FooterSection,
  GallerySection,
  IntroSection,
  OverviewSection,
  PricesSection,
  SupportSection,
  Banner,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary">
      <h1 className="font-open text-l">Next js</h1>
      <IntroSection />
      <Banner />
      <FeaturesSection />
      <SupportSection />
    </main>
  );
}
