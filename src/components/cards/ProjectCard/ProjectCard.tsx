'use client';

import { motion, MotionProps, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

import Text from '@components/typography/Text/Text';
import Title from '@components/typography/Title/Title';

import cn from '@lib/classes';

import Styles from './ProjectCard.module.css';

type Props = {
	containerClassName?: string;
	className?: string;
	variant?: 'default' | 'hover';

	img: string;
	title: string;
	description?: string;
	url?: string;
} & MotionProps &
	React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	const {
		className,
		containerClassName,
		description,
		img,
		title,
		url,
		variant,
		...rest
	} = props;

	const router = useRouter();

	const mouseX = useMotionValue(-1000);
	const mouseY = useMotionValue(-1000);

	const containerClassnames = cn(
		[
			'group',
			'relative',
			'w-full',
			'overflow-hidden',
			'rounded-xl',
			'hover:scale-101',
			//'bg-gray-200 dark:bg-gray-900',
			//'border-gray-500/20',
		],
		containerClassName,
	);

	const innerClassnames = cn(
		[
			'group',
			'relative',
			'flex',
			'flex-col',
			'rounded-xl',
			'py-5',
			'px-4',
			'transition-all',
			'duration-300',
			'hover:cursor-pointer',
		],
		className,
	);

	return (
		<motion.div
			onClick={() => url && router.push(url)}
			className={containerClassnames}
			{...rest}
		>
			<div className={innerClassnames}>
				<Image
					src={img}
					alt='project banner'
					className='h-full w-full rounded-xl object-cover group-hover:scale-101'
					height={1000}
					width={1000}
				/>
				<div className='info flex w-full items-center justify-between pt-1'>
					<Title className='font-title w-full text-justify !text-3xl font-bold text-gray-950 dark:text-gray-50'>
						{title}
					</Title>
					<GoArrowUpRight
						size={25}
						className={cn(
							'inline text-gray-950 transition-all duration-200 group-hover:opacity-100 dark:text-gray-50',
							Styles.card_external_arrow,
						)}
					/>
				</div>
				<Text className='description font-inter text-sm tracking-wide text-gray-900 dark:text-gray-100'>
					{description}
				</Text>
			</div>
		</motion.div>
	);
};

export default Component;
