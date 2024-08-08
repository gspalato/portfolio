'use client';

import React from 'react';

import Badge from '@components/decorations/Badge/Badge';
import Divider from '@components/decorations/Divider/Divider';
import PageWrapper from '@components/page/PageWrapper/PageWrapper';

import Typography from '@/components/typography';

type Props = {
	className?: string;
} & React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	return (
		<PageWrapper className='flex items-center'>
			<section className='container relative flex flex-col items-center justify-center gap-3 py-10'>
				<Badge text='Skills' />
				<Typography.Title className='font-title px-2 text-center text-5xl font-bold tracking-tight'>
					What I can do.
				</Typography.Title>
				<Typography.Subtitle className='font-body text-center text-sm tracking-wide text-gray-800 md:max-w-[600px] dark:text-gray-300'>
					Here are some of the technologies I'm proficient in.
				</Typography.Subtitle>
			</section>
			<Divider className='mx-auto w-2/3' />
			<section className='container flex h-auto w-full flex-col py-10 px-8'></section>
		</PageWrapper>
	);
};
Component.displayName = 'SkillsPageComponent';

export default Component;
