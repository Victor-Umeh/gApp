import FeaturesSection from '@/components/features'
import IntroSection from '@/components/intro'
import OverviewSection from '@/components/overview'
import PricesSection from '@/components/prices'
import SupportSection from '@/components/support'
import Banner from '@/components/banner'
import ScrollBtn from '@/components/ui/scrollBtn'
import MobileNav from '@/components/ui/mobileNav'

export default function Home() {
	return (
		<>
			<main className='font-open'>
				<IntroSection />
				<Banner />
				<OverviewSection />
				<FeaturesSection />
				<PricesSection />
				<SupportSection />
				<MobileNav />
			</main>
			<ScrollBtn />
		</>
	)
}
