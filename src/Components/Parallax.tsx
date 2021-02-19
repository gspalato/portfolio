import React, { useState, useLayoutEffect } from 'react';
import { motion, MotionStyle, useTransform, useViewportScroll } from 'framer-motion';
import { styled } from '../stitches.config';

interface IParallaxProps {
	style?: MotionStyle,
};

export const Parallax: React.FC<IParallaxProps> = (props) => {
	const [elementTop, setElementTop] = useState(0);
	const ref = React.createRef<HTMLDivElement>();
	const { scrollY } = useViewportScroll();
  
	const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
		clamp: false
	});
  
	useLayoutEffect(() => {
		const element = ref.current!;
		if (!element)
		{
			console.log(`${ref} is null.`);
			return;
		}

		setElementTop(element.offsetTop);
	}, [ ref ]);
  
	return (
		<motion.div ref={ref} className="gs-parallax-wrapper" style={{ y, ...props.style }}>
			{props.children}
		</motion.div>
	);
};