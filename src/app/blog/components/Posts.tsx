'use client';

import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';
import {
	CSSProperties,
	FocusEvent,
	PointerEvent,
	useRef,
	useState,
} from 'react';
import { GoArrowUpRight } from 'react-icons/go';

import Typography from '@components/typography';

import cn from '@lib/classes';
import { Tab } from '@lib/hooks/useTabs';

export const Posts: React.FC<{ tabs: any[] }> = ({ tabs }) => {
	const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
	const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);

	const ref = useRef<HTMLDivElement>(null);
	const rect = ref.current?.getBoundingClientRect();

	const [isInitialHoveredElement, setIsInitialHoveredElement] =
		useState(true);

	const onLeaveTabs = () => {
		setTimeout(() => {
			setIsInitialHoveredElement(true);
			setHoveredTabIndex(null);
		}, 500);
	};

	const onEnterTab = (e: PointerEvent | FocusEvent, i: number) => {
		if (!e.target || !(e.target instanceof HTMLAnchorElement)) return;

		setHoveredTabIndex((prev) => {
			if (prev != null && prev !== i) setIsInitialHoveredElement(false);

			return i;
		});
		setHoveredRect(e.target.getBoundingClientRect());
	};

	const hoverStyles: CSSProperties = { opacity: 0 };
	if (rect && hoveredRect) {
		hoverStyles.transform = `translate3d(0px,${
			hoveredRect.top - rect.top
		}px,0px)`;
		hoverStyles.width = hoveredRect.width;
		hoverStyles.height = hoveredRect.height;
		hoverStyles.opacity = hoveredTabIndex != null ? 1 : 0;
		hoverStyles.transition = isInitialHoveredElement
			? `opacity 150ms`
			: `transform 250ms 0ms, opacity 200ms 0ms, width 250ms`;
	}

	return (
		<div className='-mr-3 -ml-3 w-full'>
			<div
				className='relative flex w-full flex-col'
				ref={ref}
				onPointerLeave={onLeaveTabs}
			>
				{tabs.map((item, index) => (
					<PostCard
						item={item}
						index={index}
						key={item.title}
						hoveredTabIndex={hoveredTabIndex!}
						onEnterTab={onEnterTab}
						className={`![animation-delay:${index * 100 + 300}ms]`}
					/>
				))}
				<div
					className='absolute top-0 left-0 -z-10 rounded-lg bg-neutral-950/5 p-3.5 dark:bg-neutral-50/5'
					style={hoverStyles}
				/>
			</div>
		</div>
	);
};

const PostCard: React.FC<{
	item: any;
	index: number;
	hoveredTabIndex: number;
	onEnterTab: (e: PointerEvent | FocusEvent, i: number) => void;
	className?: string;
}> = (props) => {
	const { className, item, index, hoveredTabIndex, onEnterTab } = props;

	return (
		<>
			<Link
				href={item.href}
				target={item.href.startsWith('/') ? '_self' : '_blank'}
				rel='noreferrer'
				key={index}
				className={cn(
					'exclude animate-children animate-intro w-full min-w-[200px] [animation:intro_.2s_ease-in-out_forwards] p-3.5',
					className,
				)}
				onPointerEnter={(e) => {
					onEnterTab(e, index);
				}}
				onFocus={(e) => {
					onEnterTab(e, index);
				}}
			>
				<h3
					className={cn(
						'pointer-events-none flex items-center font-medium tracking-tight text-gray-900 dark:text-gray-50',
						hoveredTabIndex === index && 'no-underline',
					)}
				>
					<span
						className='blog-post-title'
						style={{ viewTransitionName: 'blog-post-title' }}
					>
						{item.title}
					</span>
					{!item.href.startsWith('/') && (
						<GoArrowUpRight className='mt-1 ml-1 text-base text-neutral-500' />
					)}
				</h3>
				<div className='flex w-full flex-row justify-between'>
					<Typography.Text className='font-inter pointer-events-none text-sm tracking-tight dark:text-gray-500'>
						{item.description}
					</Typography.Text>
					<Typography.Text className='font-inter pointer-events-none text-sm italic tracking-tight dark:text-gray-500'>
						{item.date ?? '00/00/0000'}
					</Typography.Text>
				</div>
			</Link>
		</>
	);
};
