'use client';

import { GeistSans } from 'geist/font/sans';
import { useSetAtom } from 'jotai';
import { ViewTransitions } from 'next-view-transitions';
import { Instrument_Serif, Inter, Karla, Manrope } from 'next/font/google';
import { PropsWithChildren, useEffect } from 'react';

import Providers from '@app/providers';

import CommandPalette from '@components/dialogs/CommandPalette/CommandPalette';
import Navbar from '@components/nav/NewNavbar/Navbar';
import PageTransitionEffect from '@components/page/PageTransitionEffect/PageTransitionEffect';

import { isTouchDeviceAtom } from '@lib/atoms';
import cn from '@lib/classes';

import '@styles/styles.css';

const instrumentSansFont = Instrument_Serif({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-instrument-sans',
});

const instrumentSerifFont = Instrument_Serif({
	style: ['italic', 'normal'],
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-family-instrument-serif',
});

const interFont = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-family-inter',
});

const karlaFont = Karla({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-family-karla',
});

const manropeFont = Manrope({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-family-manrope',
});

///

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	const classNames = cn(
		instrumentSansFont.variable,
		instrumentSerifFont.variable,
		interFont.variable,
		GeistSans.variable,
		karlaFont.variable,
		manropeFont.variable,
		'bg-gray-50',
		'dark:bg-dark-bg',
	);

	const setIsTouchDevice = useSetAtom(isTouchDeviceAtom);

	useEffect(() => {
		setIsTouchDevice(
			'ontouchstart' in window ||
				navigator.maxTouchPoints > 0 ||
				window.matchMedia('(any-pointer: coarse)').matches,
		);
	}, []);

	return (
		<ViewTransitions>
			<html lang='en' className={classNames} data-theme='dark'>
				<body className='group/body'>
					<Providers>
						{/*<Cursor />*/}
						{/*<CommandPalette />*/}
						<PageTransitionEffect>{children}</PageTransitionEffect>
						<Navbar />
					</Providers>
				</body>
			</html>
		</ViewTransitions>
	);
};

export default Layout;
