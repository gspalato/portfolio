'use client';

import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring,
} from 'framer-motion';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import React from 'react';

import { isTouchDeviceAtom } from '@lib/atoms';
import cn from '@lib/classes';
import { Cursors, useCursor } from '@lib/cursor';

type Props = {
	size?: number;
};

const Component: React.FC<Props> = (props) => {
	const { size = 10 } = props;

	const [beingClicked, setBeingClicked] = useState(false);

	const isTouchDevice = useAtomValue(isTouchDeviceAtom);

	const { currentCursorKey } = useCursor();
	const CursorComponent: React.ComponentType | null =
		Cursors[(currentCursorKey ?? '') as keyof typeof Cursors];

	const cursorX = useMotionValue(0);
	const cursorY = useMotionValue(0);

	const cursorXSpring = useSpring(cursorX, { damping: 50, stiffness: 2000 });
	const cursorYSpring = useSpring(cursorY, { damping: 50, stiffness: 2000 });

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			cursorX.set(e.clientX);
			cursorY.set(e.clientY);
		};

		const mouseDownCursor = () => setBeingClicked(true);
		const mouseUpCursor = () => setBeingClicked(false);

		window.addEventListener('mousemove', moveCursor);
		window.addEventListener('mousedown', mouseDownCursor);
		window.addEventListener('mouseup', mouseUpCursor);

		return () => {
			window.removeEventListener('mousemove', moveCursor);
			window.removeEventListener('mousedown', mouseDownCursor);
			window.removeEventListener('mouseup', mouseUpCursor);
		};
	});

	if (isTouchDevice) return null;

	return (
		<motion.div
			id='cursor-container'
			className={cn('pointer-events-none fixed top-[0] left-[0] z-[100]')}
			style={{
				display: isTouchDevice ? 'none' : 'block',
				translateX: cursorXSpring,
				translateY: cursorYSpring,
			}}
			animate={{
				scale: beingClicked ? 0.8 : 1,
			}}
		>
			<AnimatePresence mode='wait'>
				{CursorComponent ? (
					<CursorComponent />
				) : (
					<motion.div
						className='rounded-full bg-white mix-blend-difference'
						style={{ height: size, width: size }}
					/>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

Component.displayName = 'Cursor';

export default Component;
