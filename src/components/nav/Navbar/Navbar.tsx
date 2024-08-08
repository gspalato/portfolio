'use client';

import { FileTextIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import Divider from '@components/decorations/Divider/Divider';
import Navlink from '@components/nav/Navlink/Navlink';

import cn from '@lib/classes';
import { useLayout } from '@lib/layout';

import { NAVBAR_ICON_SIZE } from '@constants/icons';
import { SOCIAL_LINKS } from '@constants/social';

import { routes } from '@/data/routes';
import { Socials } from '@/data/socials';

export const SocialLinks = [
	{
		name: 'GitHub',
		url: Socials.Github,
		icon: (
			<FaGithub
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='pb-px text-gray-900 dark:text-gray-50'
			/>
		),
	},
	{
		name: 'LinkedIn',
		url: Socials.LinkedIn,
		icon: (
			<FaLinkedin
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='text-gray-900 dark:text-gray-50'
			/>
		),
	},
	{
		name: 'Resume',
		url: Socials.Resume,
		icon: (
			<FileTextIcon
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='pl-px text-gray-900 dark:text-gray-50'
			/>
		),
	},
];

type Props = {
	position?: 'top' | 'bottom';
};

const Component: React.FC<Props> = (props) => {
	let { position } = props;

	const currentPath = usePathname();
	const currentPathIdx = routes.findIndex((route) => {
		return route.href === currentPath;
	});

	const [activeIdx, setActiveIdx] = useState<number>(currentPathIdx);

	const { navbarPosition } = useLayout();
	position = position ?? navbarPosition;

	const navClassnames = cn(
		[
			'h-nav',
			'fixed',
			'z-10',
			'flex',
			'w-screen',
			'items-center',
			'justify-center',
		],
		position === 'bottom' ? 'bottom-[0%]' : 'top-[0%]',
	);

	const pillClassnames = cn([
		'inner-border',
		//'dark:border-gray-500/20 border-gray-500/20',
		'flex',
		'h-[45px]',
		'w-auto',
		'z-[100]',
		'items-start',
		'justify-center',
		'rounded-full',
		//'border',
		//'bg-gray-100/75 dark:bg-gray-900/75',
		'dark:bg-dark-glow/50',
		'backdrop-blur-md',
		'backdrop-saturate-150',
	]);

	return (
		<motion.nav id='nav' className={navClassnames}>
			<div
				className={cn(
					'h-nav',
					'absolute',
					'bottom-0',
					'w-screen',
					'from-[#00000033]',
					'dark:from-black/40',
					'bg-blend-darken',
					position === 'bottom'
						? 'bg-gradient-to-t'
						: 'bg-gradient-to-b',
				)}
			/>
			<motion.div
				className={pillClassnames}
				initial={{ y: position === 'top' ? -100 : 100, opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
				}}
				transition={{
					delay: 0,
					duration: 0.25,
				}}
			>
				<motion.div
					layout
					className='flex h-full w-auto justify-between gap-2 p-1'
				>
					<AnimatePresence>
						{routes.map((route, index) => (
							<Navlink
								key={route.href}
								name={route.title ?? ''}
								href={route.href as any}
								onClick={() => setActiveIdx(index)}
								className={cn('group relative z-[1]', {
									'z-0': activeIdx === index,
								})}
							>
								{route.icon}
								{activeIdx === index && (
									<motion.div
										key={currentPath}
										layoutId='clicked-button'
										transition={{
											duration: 0.75,
										}}
										className='dark:bg-dark-overlay-50 bg-light-overlay-50 inner-border pointer-events-none absolute inset-0 rounded-full transition-none'
									/>
								)}
							</Navlink>
						))}
					</AnimatePresence>
					<Divider direction='vertical' />
					{SocialLinks.map((link, index) => (
						<Navlink
							key={link.url}
							name={link.name}
							href={link.url}
							onClick={() => setActiveIdx(index)}
						>
							{link.icon}
						</Navlink>
					))}
					<Divider direction='vertical' />
					<Navlink
						key='toggletheme'
						name='Theme'
						href=''
						onClick={() => {
							const isDark =
								document
									.querySelector('html')
									?.getAttribute('data-theme') === 'dark';

							document
								.querySelector('html')
								?.setAttribute(
									'data-theme',
									isDark ? 'light' : 'dark',
								);
						}}
					>
						<CgDarkMode
							height={NAVBAR_ICON_SIZE}
							width={NAVBAR_ICON_SIZE}
							className='text-gray-900 dark:text-gray-50'
						/>
					</Navlink>
				</motion.div>
			</motion.div>
		</motion.nav>
	);
};

export default Component;
