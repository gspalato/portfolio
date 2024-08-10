'use client';

import Link from 'next/link';
import {
	CSSProperties,
	FocusEvent,
	PointerEvent,
	useRef,
	useState,
} from 'react';
import { GoArrowUpRight } from 'react-icons/go';

import Text from '@components/typography/Text/Text';

import cn from '@lib/classes';
import { Tab } from '@lib/hooks/useTabs';

export const Projects: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
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
		<div className='-ml-3'>
			<div
				className={'relative flex w-fit flex-col'}
				ref={ref}
				onPointerLeave={onLeaveTabs}
			>
				{tabs.map((item, index) => (
					<ProjectCard
						key={index}
						item={item}
						index={index}
						hoveredTabIndex={hoveredTabIndex!}
						onEnterTab={onEnterTab}
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

const ProjectCard: React.FC<{
	item: Tab;
	index: number;
	hoveredTabIndex: number;
	onEnterTab: (e: PointerEvent | FocusEvent, i: number) => void;
	className?: string;
}> = (props) => {
	const { className, item, index, hoveredTabIndex, onEnterTab } = props;

	const linkRef = useRef<HTMLAnchorElement>();

	return (
		<>
			<Link
				href={item.href}
				target={item.href.startsWith('/') ? '_self' : '_blank'}
				rel='noreferrer'
				key={index}
				ref={linkRef as any}
				className={cn(
					'exclude animate-children animate-intro relative w-fit p-3.5',
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
						'pointer-events-none flex items-center tracking-tight text-gray-900 dark:text-gray-50',
						hoveredTabIndex === index && 'no-underline',
					)}
				>
					{item.title}
					{!item.href.startsWith('/') && (
						<GoArrowUpRight className='mt-1 ml-1 text-base text-neutral-500' />
					)}
				</h3>
				<Text className='font-inter pointer-events-none text-sm tracking-tight dark:text-gray-500'>
					{item.description}
				</Text>
			</Link>
		</>
	);
};
