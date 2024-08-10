'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import React from 'react';

import cn from '@lib/classes';

type Props = {
	containerClassName?: string;
	className?: string;
	variant?: 'default' | 'hover';
} & React.PropsWithChildren;

const Component: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
	(props, ref) => {
		const { children, className, containerClassName, variant } = props;

		const mouseX = useMotionValue(0);
		const mouseY = useMotionValue(0);

		const containerClassnames = cn(
			'group relative w-full max-w-[350px] overflow-hidden rounded-xl bg-[#0b0b0b]',
			containerClassName,
		);

		const containerStyles = {
			background:
				'linear-gradient(to left top, #0b0b0b, #0d0d0d, #0e0e0e, #101010, #111111)',
		};

		const innerClassnames = cn(
			'border-overlay-2 relative flex flex-col gap-3 rounded-xl border py-5 px-4',
			className,
		);

		const hoverBackground = useMotionTemplate`
			radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(38, 38, 38, 0.4), transparent 80%)
		`;

		return (
			<motion.div
				ref={ref}
				onMouseMove={(e) => {
					const { left, top } =
						e.currentTarget.getBoundingClientRect();

					mouseX.set(e.clientX - left);
					mouseY.set(e.clientY - top);
				}}
				className={containerClassnames}
				style={containerStyles}
			>
				{variant === 'hover' && (
					<motion.div className='absolute top-0 right-0 h-px w-80 bg-gradient-to-l from-transparent via-white/10 via-10% to-transparent' />
				)}
				<motion.div
					className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
					style={{
						background:
							variant === 'hover' ? hoverBackground : undefined,
					}}
				/>
				<div className={innerClassnames}>{children}</div>
			</motion.div>
		);
	},
);
Component.displayName = 'Card';

export default Component;
