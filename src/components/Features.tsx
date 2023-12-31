import FeatureCard from './ui/FeatureCard'
import { featuresData } from '../utils/constants'

const FeaturesSection = () => {
	return (
		<section
			className='relative flex justify-center min-h-screen bg-center bg-no-repeat bg-cover bg-feature lg:bg-right py-[6rem]'
			id='features'
		>
			<div className='absolute inset-0 bg-gray-900/80' />

			<section className='z-[5] w-[90%] grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-[7rem] place-items-center md:px-[6rem]'>
				{featuresData.map(data => (
					<FeatureCard
						key={data.Icon}
						heading={data.heading}
						paragraph={data.paragraph}
						Icon={data.Icon}
					/>
				))}
			</section>
		</section>
	)
}

export default FeaturesSection
