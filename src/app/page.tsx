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
import { Gem, Android } from "@/icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="">Next js</h1>
      <Banner />
    </main>
  );
}
