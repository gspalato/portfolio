import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

import classes from '@lib/classes';

import Styles from './ProjectCard.module.css';

type Props = {
	containerClassName?: string;
	className?: string;
	variant?: 'default' | 'hover';

	img: string;
	title: string;
	description?: string;
	url?: string;
} & React.PropsWithChildren;

const Component: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
	(props, ref) => {
		const {
			className,
			containerClassName,
			description,
			img,
			title,
			url,
			variant,
		} = props;

		const mouseX = useMotionValue(0);
		const mouseY = useMotionValue(0);

		const navigate = useNavigate();

		const containerClassnames = classes(
			'group relative w-full overflow-hidden rounded-xl bg-[#0b0b0b]',
			containerClassName,
		);

		const containerStyles = {
			background:
				'linear-gradient(to left top, #0b0b0b, #0d0d0d, #0e0e0e, #101010, #111111)',
		};

		const innerClassnames = classes(
			'group relative flex flex-col gap-3 rounded-xl py-5 px-4',
			'hover:bg-overlay-1 hover:border-overlay-2 transition-all duration-300 hover:scale-101 hover:cursor-pointer',
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
				onClick={() => url && navigate(url)}
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
				<div className={innerClassnames}>
					<img
						src={img}
						alt='ecobucks'
						className='h-full w-full rounded-xl object-cover'
					/>
					<div className='info flex w-full items-center justify-between'>
						<h1 className='font-title text-text w-full text-justify text-3xl'>
							{title}
						</h1>
						<GoArrowUpRight
							size={25}
							className={classes(
								'text-text inline transition-all duration-200 group-hover:opacity-100',
								Styles.card_external_arrow,
							)}
						/>
					</div>
					<motion.p className='description font-manrope text-text-secondary text-sm tracking-wide'>
						{description}
					</motion.p>
				</div>
			</motion.div>
		);
	},
);

export default Component;
