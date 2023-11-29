'use client'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
// import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion'
import { Hamburger, Gem, Close } from '@/icons'
import { useState } from 'react'

const links = ['intro', 'overview', 'features', 'prices', 'support']

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<nav
			className='fixed z-[999] w-full p-6 bg-black/90 lg:bg-transparent top-0 lg:top-7 duration-[800ms]'
			id='nav'
		>
			<div className='md:w-[85%] flex items-center justify-between mx-auto font-[600] text-white'>
				{/* logo */}
				<Image
					src={'/logo.svg'}
					width={100}
					height={100}
					alt='company logo'
					className='md:w-[130px]'
				/>

				{/* desktop nav-links */}
				<ul className='hidden lg:flex lg:flex-row lg:flex-1 lg:flex-shrink-0 lg:justify-end lg:gap-3 text-[13px] text-white capitalize tracking-widest'>
					{links.map(link => {
						return (
							<li key={link}>
								<Link
									className={clsx(
										'px-5 py-3 duration-300 rounded-full cursor-pointer hover:text-main hover:bg-primary active:text-main active:bg-primary'
										// { "text-main bg-primary": activeLink }
									)}
									href={`#${link}`}
									onClick={e => {
										e.preventDefault()
										document
											.getElementById(link)
											?.scrollIntoView({ behavior: 'smooth' })
									}}
								>
									{link}
								</Link>
							</li>
						)
					})}
				</ul>

				{/* hamburger-menu */}
				<AnimatePresence mode='wait'>
					{menuOpen && (
						<motion.ul
							className='w-full h-full bg-black/80 backdrop-blur-sm fixed  left-0 bottom-0 flex flex-col justify-center items-center gap-12 -z-10 text-[13px] text-white capitalize tracking-widest'
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'tween', ease: 'easeInOut' }}
							onClick={() => setMenuOpen(!menuOpen)}
						>
							{links.map(link => {
								return (
									<li key={link}>
										<Link
											className={clsx(
												'px-5 py-3 duration-300 rounded-full cursor-pointer hover:text-main hover:bg-primary active:text-main active:bg-primary'
												// { "text-main bg-primary": activeLink }
											)}
											href={`#${link}`}
											onClick={e => {
												e.preventDefault()
												setMenuOpen(!menuOpen)
												document
													.getElementById(link)
													?.scrollIntoView({ behavior: 'smooth' })
											}}
										>
											{link}
										</Link>
									</li>
								)
							})}
						</motion.ul>
					)}
				</AnimatePresence>

				<button className='hidden min-w-[156px] text-[11px]  gap-2 items-center justify-center px-5 py-3 duration-300 rounded-full cursor-pointer border-[1.5px] border-[#ffe565] lg:flex lg:ml-6 hover:text-main hover:bg-primary'>
					<Gem />
					DOWNLOAD APP
				</button>
				{/* hamburger */}
				<button
					className='p-3 rounded-full bg-primary lg:hidden'
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<Hamburger className='text-2xl text-main' />
				</button>
				{/* nav-menu */}
			</div>
		</nav>
	)
}

export default NavBar
