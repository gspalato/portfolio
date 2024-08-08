'use client';

import React, { useState } from 'react';

import PageWrapper from '@components/page/PageWrapper/PageWrapper';
import Typography from '@components/typography';

import { Posts } from './components/Posts';

import { useTabs } from '@lib/hooks/useTabs';

type Props = {
	posts: any[];
	className?: string;
};

const Component: React.FC<Props> = (props) => {
	const { className, posts } = props;

	const [postTabs] = useState({
		tabs: posts.map((p) => ({
			title: p.title,
			description: p.description,
			date: p.date,
			href: `/blog/${p.id}`,
		})),
	});

	const css = useTabs(postTabs);

	return (
		<PageWrapper className='flex h-screen w-full items-center'>
			<div className='w-content md:w-content-lg pb-[100px]'>
				<section className='container !sm:pb-0 relative flex w-full flex-col gap-3 py-10'>
					<Typography.Title className='animate-intro text-lg font-medium leading-[1.125rem]'>
						Posts
					</Typography.Title>
					<Typography.Text className='animate-intro font-inter text-base leading-[1rem] tracking-tight text-gray-500 ![animation-delay:200ms]'>
						Infrequent posts about tech or something.
					</Typography.Text>
				</section>
				<div className='h-px w-full bg-gray-500/20' />
				<section className='container !sm:pb-0 animate-intro relative flex w-full flex-col gap-3 py-10'>
					<Posts {...css.tabProps} />
				</section>
			</div>
		</PageWrapper>
	);
};
Component.displayName = 'Blog';

export default Component;
