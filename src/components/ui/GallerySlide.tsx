'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import GalleryImage from './GalleryImage'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Keyboard, Navigation } from 'swiper/modules'

const GallerySlide = () => {
	return (
		<>
			<Swiper
				slidesPerView={6}
				spaceBetween={25}
				keyboard={{
					enabled: true,
				}}
				navigation={true}
				modules={[Keyboard, Navigation]}
				className='mt-12'
			>
				<SwiperSlide className='w-[100%] border-2 border-red-700 max-h-[450px] overflow-hidden'>
					<GalleryImage />
				</SwiperSlide>
				<SwiperSlide className='w-[100%] border-2 border-red-700 max-h-[450px] overflow-hidden'>
					<GalleryImage />
				</SwiperSlide>
				<SwiperSlide className='w-[100%] border-2 border-red-700 max-h-[450px] overflow-hidden'>
					<GalleryImage />
				</SwiperSlide>
				<SwiperSlide className='w-[100%] border-2 border-red-700 max-h-[450px] overflow-hidden'>
					<GalleryImage />
				</SwiperSlide>
				<SwiperSlide className='w-[100%] border-2 border-red-700 max-h-[450px] overflow-hidden'>
					<GalleryImage />
				</SwiperSlide>
				<SwiperSlide className='w-[100%] border-2 border-red-700 max-h-[450px] overflow-hidden'>
					<GalleryImage />
				</SwiperSlide>
				<SwiperSlide className='w-[100%] border-2 border-red-700 max-h-[450px] overflow-hidden'>
					<GalleryImage />
				</SwiperSlide>
				<SwiperSlide className='w-[100%] border-2 border-red-700 max-h-[450px] overflow-hidden'>
					<GalleryImage />
				</SwiperSlide>
				<SwiperSlide className='w-[100%] border-2 border-red-700 max-h-[450px] overflow-hidden'>
					<GalleryImage />
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default GallerySlide
