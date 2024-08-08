import { cva, VariantProps } from 'class-variance-authority';
import { motion, MotionProps } from 'framer-motion';
import React, { CSSProperties } from 'react';

import cn from '@lib/classes';

type Props = {
	className?: string;
	style?: CSSProperties;
} & React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	const { children, className, style } = props;

	const classNames = cn('text-gray-500', 'font-body', className);

	return (
		<p className={classNames} style={style}>
			{children}
		</p>
	);
};
Component.displayName = 'Typography.Text';

export default Component;
