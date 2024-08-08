'use client';

import { motion } from 'framer-motion';

import cn from '@lib/classes';

type Props = {
	className?: string;
	style?: React.CSSProperties;

	isOpen: boolean;
	setOpen?: (open: boolean) => void;
} & React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	const { children, className, isOpen, setOpen, style } = props;

	const classNames = cn(
		'container fixed z-20 h-screen w-screen bg-dark-glow backdrop-blur-sm',
		className,
	);

	return (
		<motion.div
			className={classNames}
			style={{ pointerEvents: isOpen ? 'all' : 'none', ...style }}
			animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
			onClick={() => setOpen && setOpen(false)}
		>
			{children}
		</motion.div>
	);
};

export default Component;
