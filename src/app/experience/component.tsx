'use client';

import React from 'react';

import Badge from '@components/decorations/Badge/Badge';
import Divider from '@components/decorations/Divider/Divider';
import PageWrapper from '@components/page/PageWrapper/PageWrapper';
import Subtitle from '@components/typography/Subtitle/Subtitle';
import Text from '@components/typography/Text/Text';
import Title from '@components/typography/Title/Title';

import cn from '@/lib/classes';

const Timeline: {
	role: any;
	place: any;
	mode: any;
	date: any;
	description: React.ReactNode;
}[] = [
	{
		role: 'Software Developer',
		place: 'G.WIND',
		mode: 'Freelance',
		date: 'June 2024 - July 2024',
		description: (
			<>
				• Developed a repair and task management bot, synchronized to
				the client's group chats on Telegram.
				<br />• Worked alongside the client to establish problem
				specifications and other system designs.
				<br />• Deployed the software and it's requisites, such as the
				MongoDB database, on the client's server, using Docker.
				<br />• Maintained support for the software, fixing bugs and
				scaling the software according to the client's needs.
			</>
		),
	},
	{
		role: 'Software Developer',
		place: 'G.WIND',
		mode: 'Freelance',
		date: 'October 2023 - November 2023',
		description: (
			<>
				• Developed an image upload automation and automatic report
				generation bot, synchronized to the cloud and the client's group
				chats on Telegram.
				<br />• Worked alongside the client to establish the software's
				requirements.
				<br />• Deployed the software on the client's cloud using
				Docker.
				<br />• Maintained support for the software, fixing bugs and
				scaling the tool according to the client's needs.
			</>
		),
	},
];

///

type Props = {
	className?: string;
} & React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	const { children, className } = props;

	return (
		<PageWrapper className='flex items-center' includeNavbarPadding>
			<section className='container relative flex flex-col items-center justify-center gap-3 py-10'>
				<Badge text='Experience' />
				<Title className='font-title px-2 text-center text-5xl font-bold tracking-tight'>
					My work history.
				</Title>
				<Subtitle className='font-body break-normal px-4 text-center text-sm tracking-wide text-gray-800 md:max-w-[600px] dark:text-gray-300'>
					Here's a brief overview of my professional background.
				</Subtitle>
			</section>
			<Divider className='mx-auto w-2/3' />
			<section className='container flex h-auto w-full flex-col items-center gap-6 pt-10 px-10'>
				{Timeline.map((x, i) => (
					<div
						key={i}
						className={cn(
							'relative',
							'flex',
							'max-w-[600px]',
							'flex-col',
							'gap-2',
							'rounded-xl',
							'inner-border',
							//'bg-light-glow',
							//'dark:bg-dark-glow',
							'bg-gray-50',
							//'border-gray-500/20',
							'dark:bg-gray-900',
							'p-6',
							'text-sm',
						)}
					>
						<div
							className={cn(
								'bg-foreground',
								'absolute',
								'top-1',
								'left-0',
								'z-10',
								'aspect-square',
								'w-3',
								'translate-x-[-29.5px]',
								'rounded-full',
							)}
						/>
						<Subtitle className='text-gray-800 dark:text-gray-300'>
							{x.date}
						</Subtitle>
						<Title className='font-display'>{x.role}</Title>
						<Subtitle className=''>
							{x.place} | {x.mode}
						</Subtitle>
						<Text className=''>{x.description}</Text>
					</div>
				))}
			</section>
		</PageWrapper>
	);
};
Component.displayName = 'ExperiencePageComponent';

export default Component;
