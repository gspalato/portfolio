'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

import Text from '@components/typography/Text/Text';

import cn from '@lib/classes';

type Props = {
	date: string | React.ReactNode;
	description: string | React.ReactNode;
	role: string | React.ReactNode;
	place: string | React.ReactNode;

	className?: string;
};

const Component: React.FC<Props> = (props) => {
	const { className, date, description, role, place } = props;

	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<motion.div className={cn('flex flex-col rounded-lg pb-2', className)}>
			<div
				className='group flex w-full cursor-pointer flex-row justify-between pb-3'
				onMouseDown={() => setIsExpanded((p) => !p)}
			>
				<h3 className='pointer-events-none flex flex-row items-center tracking-tight text-gray-900 select-none dark:text-gray-50'>
					{place}
					<span className='pl-3 italic text-gray-500'>{role}</span>
					<span
						className={cn(
							'pointer-events-none ml-2 text-[10px] leading-[10px] text-gray-500',
							isExpanded ? 'rotate-90' : 'rotate-0',
						)}
					>
						<MdArrowForwardIos />
					</span>
				</h3>
				<Text className='font-inter pointer-events-none text-sm tracking-tight text-gray-500 select-none'>
					{date}
				</Text>
			</div>
			<AnimatePresence>
				{isExpanded && description && (
					<motion.div
						className={cn(
							'font-inter block text-xs font-[450] tracking-tight text-gray-600 transition-none sm:text-sm dark:text-gray-400',
						)}
						variants={{
							collapsed: {
								opacity: 0,
								height: '0px',
								filter: 'blur(5px)',
								y: '-10px',
							},
							open: {
								opacity: 1,
								height: 'auto',
								filter: 'blur(0px)',
								y: 0,
							},
						}}
						initial='collapsed'
						animate='open'
						exit='collapsed'
						transition={{
							duration: 0.5,
							ease: [0.16, 1, 0.3, 1],
							opacity: {
								duration: 0.1,
							},
						}}
					>
						{description}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};
Component.displayName = 'ExperienceEntry';

export default Component;
