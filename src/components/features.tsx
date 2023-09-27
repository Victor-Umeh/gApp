import FeatureCard from "./ui/featureCard";
import { featuresData } from "@/utils/constants";

const FeaturesSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen p-2 bg-center bg-no-repeat bg-cover bg-support lg:bg-right">
      <div className="absolute inset-0 backdrop-blur-4 opacity-80 bg-secondary" />
      <section className="z-10 w-full bg-white">
        {featuresData.map((data) => (
          <FeatureCard>{data.heading}</FeatureCard>
        ))}
      </section>
    </section>
  );
};

export default FeaturesSection;
