import { AiOutlineHome } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { LuLayoutGrid, LuLightbulb } from 'react-icons/lu';
import { RxBackpack } from 'react-icons/rx';

import { NAVBAR_ICON_SIZE } from '@constants/icons';

export const routes = [
	{
		href: '/',
		title: 'Home',
		description: '',
		icon: (
			<AiOutlineHome
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='pb-px text-gray-900 dark:text-gray-50'
			/>
		),
	},
	{
		href: '/blog',
		title: 'Blog',
		description: '',
		icon: (
			<AiOutlineHome
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='pb-px text-gray-900 dark:text-gray-50'
			/>
		),
	},
	/*
	{
		href: '/projects',
		title: 'Projects',
		description: '',
		icon: (
			<LuLayoutGrid
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='text-gray-900 dark:text-gray-50'
			/>
		),
	},
	{
		href: '/skills',
		title: 'Skills',
		description: '',
		icon: (
			<LuLightbulb
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='pl-px text-gray-900 dark:text-gray-50'
			/>
		),
	},
	{
		href: '/experience',
		title: 'Work',
		description: '',
		icon: (
			<RxBackpack
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='pl-px text-gray-900 dark:text-gray-50'
			/>
		),
	},
	{
		path: '/blog',
		name: 'Blog',
		icon: (
			<FiEdit
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='text-text pb-px'
			/>
		),
	},
	*/
];
