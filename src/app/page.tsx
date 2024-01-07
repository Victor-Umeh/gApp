import FeaturesSection from '../components/Features'
import IntroSection from '../components/Intro'
import OverviewSection from '../components/Overview'
import PricesSection from '../components/Prices'
import SupportSection from '../components/Support'
import Banner from '../components/Banner'
import MobileNav from '../components/ui/MobileNav'

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
		</>
	)
}
