import React from 'react';

import AnimatedBorderVariant from '@components/decorations/Badge/variants/AnimatedBorderBadge';

import cn from '@lib/classes';

import Styles from './Badge.module.css';

type Props = {
	className?: string;
	text: string;
	icon?: React.ReactElement | 'pulse';
	style?: React.CSSProperties;

	variant?: 'default' | 'overlay' | 'animated-border';
};

const Component: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
	(props, ref) => {
		const { className, style, text, variant = 'default', ...rest } = props;
		let icon = props.icon;

		const classNames = cn(
			[
				'text-gray-900 dark:text-gray-50',
				'flex',
				'min-h-4',
				'items-center',
				'justify-center',
				'gap-2',
				'rounded-full',
				'p-2',
				'px-4',
				'text-[13px]',
				'leading-[13px]',
				'tracking-[.3px]',
				'shadow-md',
				'backdrop-blur-sm',
				'font-inter',
				'font-[300]',
				'inner-border',
			],
			className,
		);

		const pulseIndicatorClassnames = cn(
			'h-1 w-1 rounded-full bg-[#00cc00] p-1',
			Styles.pulse,
		);

		return (
			<div
				ref={ref}
				className={classNames}
				style={{ ...style }}
				{...rest}
			>
				{icon === 'pulse' ? (
					<div className={pulseIndicatorClassnames} />
				) : (
					icon
				)}
				<span>{text}</span>
			</div>
		);
	},
);

export default Component;
