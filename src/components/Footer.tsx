import CustomSectionHeading from './ui/CustomSectionHeading'
import { socials } from '../utils/constants'
import { Apple, Android } from '../icons'

const Footer = () => {
	return (
		<footer className='mb-[4rem] md:mb-0'>
			<div className='flex flex-wrap flex-col md:flex-row items-center justify-center md:justify-between gap-12 px-5 py-[5rem] md:px-[8rem] md:py-[11rem]'>
				<CustomSectionHeading
					questionMark={null}
					headerBold='Download'
					headerLight='Trial Version'
					tag='DOWNLOADING'
				/>

				<div className='flex flex-col md:flex-row gap-12 self-center'>
					<a
						href={'/store'}
						className='py-6 px-10 text-md gap-2 font-bold w-[max-content] bg-primary flex items-center justify-center text-black rounded-full hover:bg-secondary hover:text-secondary duration-300 md:ml-auto'
					>
						<Android className='text-5xl mr-2' />
						<span className='font-[800]'>
							Google Play
							<span className='text-[14px] font-[300] block'>Download</span>
						</span>
					</a>
					<a
						href={'/store'}
						className='py-6 px-10 text-md gap-2 font-bold w-[max-content] bg-secondary flex items-center justify-center text-white rounded-full hover:bg-primary hover:text-black duration-300'
					>
						<Apple className='text-5xl mr-2' />
						<span className='font-[800]'>
							Apple Store
							<span className='text-[14px] font-[300] block'>Download</span>
						</span>
					</a>
				</div>
			</div>

			{/* social links */}
			<div className='bg-primary flex flex-wrap items-center justify-center gap-4 px-5 md:px-[8rem] py-[2.5rem] border-b-2 border-black'>
				{socials.map(social => (
					<a
						href={social.link}
						key={social.link}
						target='_blank'
						className='w-[50px] h-[50px] text-3xl flex items-center justify-center rounded-full hover:text-white hover:bg-black duration-300'
					>
						<social.Logo />
					</a>
				))}
			</div>
			<div className='bg-secondary py-[2rem] px-5 text-center text-sm text-gray-500'>
				<p>Copyright © 2023 Xtra Theme. All Rights Reserved</p>
			</div>
		</footer>
	)
}

export default Footer
