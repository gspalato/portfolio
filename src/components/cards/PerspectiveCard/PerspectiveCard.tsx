import {
	animate,
	HTMLMotionProps,
	motion,
	MotionProps,
	useMotionValue,
	useSpring,
	useTransform,
} from 'framer-motion';
import React, { HTMLProps, useRef, useState } from 'react';

import cn from '@lib/classes';

type Props = {
	className?: string;
} & React.PropsWithChildren &
	MotionProps &
	HTMLMotionProps<'div'>;

const Component: React.FC<Props> = (props) => {
	const { children, className, style, ...rest } = props;

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const rotateX = useTransform(
		mouseYSpring,
		[-0.5, 0.5],
		['17.5deg', '-17.5deg'],
	);
	const rotateY = useTransform(
		mouseXSpring,
		[-0.5, 0.5],
		['-17.5deg', '17.5deg'],
	);

	const handleMouseMove = (e: any) => {
		const rect = e.target.getBoundingClientRect();

		const height = rect.height;
		const width = rect.height;

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPercentage = mouseX / width - 0.5;
		const yPercentage = mouseY / height - 0.5;

		x.set(xPercentage);
		y.set(yPercentage);
	};

	const handleMouseLeave = (e: any) => {
		x.set(0);
		y.set(0);
	};

	const classNames = cn(
		'relative',
		'[transform-style:preserve-3d]',
		'[&>*]:[transform-style:preserve-3d]',
		className,
	);

	return (
		<motion.div
			className={classNames}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ rotateX, rotateY, ...style }}
			{...rest}
		>
			{children}
		</motion.div>
	);
};
Component.displayName = 'PerspectiveCard';

export default Component;
