import { AnimatePresence, motion } from 'framer-motion';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useContext, useRef } from 'react';

const FrozenRouter: React.FC<PropsWithChildren> = (props) => {
	const context = useContext(LayoutRouterContext ?? {});
	const frozen = useRef(context).current;

	if (!frozen) {
		return <>{props.children}</>;
	}

	return (
		<LayoutRouterContext.Provider value={frozen}>
			{props.children}
		</LayoutRouterContext.Provider>
	);
};

const AnimationVariants = {
	hidden: { opacity: 0, scale: 1 },
	visible: { opacity: 1, scale: 1 },
};

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
	// The `key` is tied to the url using the `usePathname` hook.
	const key = usePathname();

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				id='content'
				key={key}
				initial='hidden'
				animate='visible'
				exit='hidden'
				variants={AnimationVariants}
				transition={{ ease: 'easeInOut', duration: 0.2 }}
			>
				<FrozenRouter>{children}</FrozenRouter>
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransitionEffect;
