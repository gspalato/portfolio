'use client';

import { motion, MotionProps } from 'framer-motion';
import React, { useEffect } from 'react';

import cn from '@lib/classes';

type Props = {
	className?: string;
	includeNavbarPadding?: boolean;
	skipNavbarHeight?: boolean;
} & MotionProps &
	React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	const {
		children,
		className,
		includeNavbarPadding,
		skipNavbarHeight,
		...rest
	} = props;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const classNames = cn(
		'overflow-y flex h-auto w-screen flex-col',
		includeNavbarPadding && 'pb-nav',
		skipNavbarHeight && 'mb-nav',
		className,
	);

	return (
		<motion.div className={classNames} {...rest}>
			{children}
		</motion.div>
	);
};

export default Component;
