import { IArticleProps } from '../../types'
import clsx from 'clsx'

type Props = Omit<IArticleProps, 'style' | 'paragraph' | 'children'> & {
	questionMark?: string | null
	variants?: 'light' | 'dark'
}

const CustomSectionHeading = ({
	tag,
	headerBold,
	headerLight,
	questionMark = '?',
	variants = 'dark',
}: Props) => (
	<div className='relative '>
		<span
			aria-label='graphics pattern label'
			role='pattern'
			className={clsx(
				'absolute top-0 left-0 md:-left-6 border-[9px] border-[#ffe565]/40 w-[60px] h-[60px] rounded-lg rotate-45'
			)}
		/>
		<span
			className='text-[#808080] text-md font-[200] italic'
			role='paragraph'
			aria-label='article tag'
		>
			{tag}
		</span>
		<h3
			className={clsx('text-[38px] font-[900] z-8 relative', {
				'text-white': variants === 'light',
			})}
		>
			{headerBold}
			<span className='font-[200]'> {headerLight}</span> {questionMark}
		</h3>
	</div>
)

export default CustomSectionHeading
