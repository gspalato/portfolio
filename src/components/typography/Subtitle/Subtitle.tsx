import { motion, MotionProps } from 'framer-motion';
import React, { CSSProperties } from 'react';

import cn from '@lib/classes';

type Props = {
	className?: string;
	style?: CSSProperties;
} & React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	const { children, className, style } = props;

	const classNames = cn(
		'font-body text-gray-800 dark:text-gray-100 tracking-tight font-medium',
		className,
	);

	return (
		<p className={classNames} style={style}>
			{children}
		</p>
	);
};
Component.displayName = 'Typography.Subtitle';

export default Component;
