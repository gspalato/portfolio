'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

import cn from '@lib/classes';

type Props = {
	className?: string;

	name: string;

	showTooltip?: boolean;
} & React.PropsWithChildren &
	React.ComponentProps<typeof Link>;

const Component: React.FC<Props> = (props) => {
	const {
		children,
		className,
		name,
		showTooltip = true,
		href,
		...rest
	} = props;

	const [isHovered, setHovered] = React.useState(false);

	const isExternalLink =
		!href.toString().startsWith('/') && href.toString().length > 0;

	const classnames = cn(
		'hover:dark:bg-gray-800/50 hover:bg-gray-100/50',
		'dark:shadow-dark-border border-light-border',
		'flex',
		'aspect-square',
		'h-full',
		'w-auto',
		'items-center',
		'justify-center',
		'rounded-full',
		'p-[2px]',
		'transition-all',
		'duration-150',
		'hover:-inset-shadow-[1px]',
		className,
	);

	return (
		<Link
			href={href}
			className={classnames}
			onMouseEnter={(e) => {
				setHovered(true);
			}}
			onMouseLeave={(e) => {
				setHovered(false);
			}}
			prefetch
			{...rest}
		>
			{showTooltip && (
				<motion.div
					className={cn(
						'font-inter',
						'text-inter',
						'pointer-events-none',
						'absolute',
						'z-2',
						'text-gray-900 dark:text-gray-50',
						'hidden',
						'flex-row',
						'gap-1',
						'rounded-lg',
						'border',
						'bg-gray-50',
						'p-2',
						'px-3',
						'text-xs',
						'font-[400]',
						'tracking-wide',
						'sm:flex',
						'border-gray-500/20',
						'dark:bg-gray-900',
					)}
					animate={{
						opacity: isHovered ? 1 : 0,
						top: isHovered ? '-40px' : '-30px',
						scale: isHovered ? 1 : 0.75,
					}}
					transition={{ duration: 0.1 }}
				>
					{name}{' '}
					{isExternalLink && (
						<span>
							<GoArrowUpRight className='inline' />
						</span>
					)}
				</motion.div>
			)}
			{children}
		</Link>
	);
};

export default Component;
