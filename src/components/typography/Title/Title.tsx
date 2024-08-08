import { cva, VariantProps } from 'class-variance-authority';
import { motion, MotionProps } from 'framer-motion';
import React, { CSSProperties } from 'react';

import cn from '@lib/classes';

type Props = {
	className?: string;
	gradient?: boolean;
	style?: CSSProperties;
} & React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	const { children, className, gradient, style } = props;

	const classNames = cn(
		[
			'text-gray-900 dark:text-gray-50',
			'font-title',
			'scroll-m-20',
			'text-4xl',
			'[font-weight:600]',
			'tracking-tight',
		],
		gradient && [
			'bg-gradient-to-r',
			'from-gray-950',
			'to-gray-500',
			'!bg-clip-text',
			'!text-transparent',
			'dark:from-white',
			'dark:to-gray-500',
		],
		className,
	);

	return (
		<h1
			className={classNames}
			style={
				{
					backgroundClip: gradient && 'text',
					WebkitTextFillColor: gradient && 'transparent',
					...style,
				} as CSSProperties
			}
		>
			{children}
		</h1>
	);
};
Component.displayName = 'Typography.Title';

export default Component;
