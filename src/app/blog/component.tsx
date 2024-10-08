'use client';

import React, { useState } from 'react';

import PageWrapper from '@components/page/PageWrapper/PageWrapper';
import Text from '@components/typography/Text/Text';
import Title from '@components/typography/Title/Title';

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
					<Title className='animate-intro text-lg font-medium leading-[1.125rem]'>
						Posts
					</Title>
					<Text className='animate-intro font-inter text-base leading-[1rem] tracking-tight text-gray-500 ![animation-delay:200ms]'>
						Infrequent posts about tech or something.
					</Text>
				</section>
				<div className='h-px w-full bg-gray-500/20' />
				<section className='container !sm:pb-0 animate-intro relative flex w-full flex-col gap-3 py-10'>
					{posts.length === 0 && (
						<Text className='font-body text-md text-gray-300 dark:text-gray-700'>
							No posts yet.
						</Text>
					)}
					<Posts {...css.tabProps} />
				</section>
			</div>
		</PageWrapper>
	);
};
Component.displayName = 'BlogPageComponent';

export default Component;
