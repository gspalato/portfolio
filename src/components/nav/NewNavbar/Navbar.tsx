'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	CSSProperties,
	FC,
	FocusEvent,
	PointerEvent,
	useEffect,
	useRef,
	useState,
} from 'react';

import cn from '@lib/classes';
import { Tab, useTabs } from '@lib/hooks/useTabs';

import { routes } from '@/data/routes';

const active = (path: string) => {
	if (path.includes('blog')) return 1;
	//else if (path.includes('skills')) return 2;
	//else if (path.includes('experience')) return 3;
	else return 0;
};

const Component: React.FC = () => {
	const pathname = usePathname();

	const [selected, setSelected] = useState<number>(active(pathname));
	const [tabs] = useState({
		tabs: routes,
	});

	const css = useTabs(tabs);

	useEffect(() => {
		setSelected(active(pathname));
	}, [pathname]);

	return (
		<div
			className={cn(
				'fixed',
				'bottom-0',
				'left-1/2',
				'z-50',
				'mb-8',
				'flex',
				'-translate-x-1/2',
				'items-center',
				'rounded-full',
				//'border-2',
				'inner-border',
				'border-neutral-600',
				'bg-gray-500/50',
				'py-2',
				'px-3.5',
				'text-neutral-50',
				'shadow-[0_24px_14px_#00000020,0_0_0_1px_#000000bb,0_4px_10px_#00000040]',
				'backdrop-blur-sm',
				'dark:border-neutral-700/50',
				'dark:bg-neutral-800/75',
				'dark:shadow-[0_24px_14px_#00000020,0_0_0_1px_rgba(38,38,38,0.75),0_4px_10px_#00000040]',
			)}
		>
			<Links {...css.tabProps} selectedTabIndex={selected} />
			{/*
			<div className='mx-3 h-0.5 w-0.5 rounded-full bg-neutral-400' />
			<a
				href='mailto:hi.harsh@pm.me?subject=Project%20Inquiry'
				rel='noreferrer'
				target='_blank'
				className='exclude rounded-full bg-neutral-50/25 py-1.5 px-3.5 text-sm shadow-[0_10px_5px_-2.5px_#00000020,inset_0_4px_16px_#FFFFFF50] transition-colors hover:bg-neutral-50/30 active:bg-neutral-50/40 dark:bg-neutral-700 dark:shadow-[0_10px_5px_-2.5px_#00000020,inset_0_4px_16px_rgba(150,150,150,0.5)]'
			>
				Contact
			</a>
            */}
		</div>
	);
};
Component.displayName = 'Navbar';

export default Component;

type Props = {
	selectedTabIndex: number;
	tabs: Tab[];
};

export const Links: FC<Props> = ({ tabs, selectedTabIndex }) => {
	const [buttonRefs, setButtonRefs] = useState<
		Array<HTMLAnchorElement | null>
	>([]);

	useEffect(() => {
		setButtonRefs((prev) => prev.slice(0, tabs.length));
	}, [tabs.length]);

	const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
	const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);

	const ref = useRef<HTMLElement>(null);
	const rect = ref.current?.getBoundingClientRect();
	const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

	const isInitialRender = useRef(true);

	const onLeaveTabs = () => {
		setHoveredTabIndex(null);
	};

	const onEnterTab = (
		e: PointerEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>,
		i: number,
	) => {
		if (!e.target || !(e.target instanceof HTMLAnchorElement)) return;

		setHoveredTabIndex(i);
		setHoveredRect(e.target.getBoundingClientRect());
	};

	const hoverStyles: CSSProperties = {
		opacity: 0,
		transform: 'translateY(20px)',
	};

	if (rect && hoveredRect) {
		hoverStyles.transform =
			hoveredTabIndex === null
				? `translate3d(${hoveredRect.left - rect.left}px,20px,0px)`
				: `translate3d(${hoveredRect.left - rect.left}px,0px,0px)`;
		hoverStyles.width = hoveredRect.width;
		hoverStyles.height = hoveredRect.height;
		hoverStyles.opacity = hoveredTabIndex != null ? 1 : 0;
		hoverStyles.transition =
			'transform 250ms 0ms, opacity 250ms 0ms, width 250ms';
	}

	const selectStyles: CSSProperties = { opacity: 0 };
	if (rect && selectedRect) {
		selectStyles.width = selectedRect.width * 0.8;
		selectStyles.transform = `translateX(calc(${
			selectedRect.left - rect.left
		}px + 10%))`;
		selectStyles.opacity = 1;
		selectStyles.transition = isInitialRender.current
			? `opacity 150ms 150ms`
			: `transform 150ms 0ms, opacity 150ms 150ms, width 150ms`;

		isInitialRender.current = false;
	}

	return (
		<nav
			className='relative z-50 flex items-center'
			ref={ref}
			onPointerLeave={onLeaveTabs}
		>
			{tabs.map((item, index) => (
				<Link
					key={index}
					href={item.href}
					className={cn(
						'exclude rounded-full py-1 px-3.5 text-sm font-[500] transition-colors',
						hoveredTabIndex === index || selectedTabIndex === index
							? 'text-neutral-50'
							: 'text-neutral-500',
						selectedTabIndex === index &&
							'[text-shadow:0px_0px_10px_#ffffffff]',
					)}
					onPointerEnter={(e) => onEnterTab(e, index)}
					onFocus={(e) => onEnterTab(e, index)}
					ref={(el) => (buttonRefs[index] = el) as any}
				>
					{item.title}
				</Link>
			))}
			<div
				className='pointer-events-none absolute top-0 left-0 rounded-full bg-neutral-50/25 dark:bg-neutral-50/10'
				style={hoverStyles}
				aria-hidden
			/>
			<div
				className='pointer-events-none absolute bottom-0 left-0 -mb-1 flex justify-center rounded-full'
				style={selectStyles}
				aria-hidden
			>
				<div className='h-0.5 w-0.5 rounded-full bg-neutral-50' />
			</div>
		</nav>
	);
};
