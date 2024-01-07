import React from 'react'

type TProps = {
	children: React.ReactNode
	type: string
	handle: string
}

const SupportChannel = ({ children, type, handle }: TProps) => {
	return (
		<div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-6 group'>
			<span className='w-[75px] h-[75px] flex items-center justify-center text-main text-[32px] rounded-full bg-primary group-hover:bg-secondary group-hover:text-secondary transition-all duration-500'>
				{children}
			</span>
			<p className='font-[800] text-white text-2xl text-center md:text-left'>
				{type}
				<span className='block font-[300] text-base'>{handle}</span>
			</p>
		</div>
	)
}

export default SupportChannel
