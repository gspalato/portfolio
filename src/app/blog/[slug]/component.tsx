import Image from 'next/image';
import React from 'react';

import Divider from '@components/decorations/Divider/Divider';
import Subtitle from '@components/typography/Subtitle/Subtitle';
import Title from '@components/typography/Title/Title';

import { PostBody } from './components/PostBody';

type Props = {
	post: any;
};

const Component: React.FC<Props> = async ({ post }) => {
	return (
		<div className='overflow-y flex h-auto h-screen w-full w-screen flex-col items-center'>
			{'banner' in post && (
				<Image
					src={post.banner}
					alt='Post banner.'
					className='h-[30vh] max-h-[500px] w-full object-cover'
					height={512}
					width={1024}
				/>
			)}
			<div className='w-content md:w-content-lg pb-[100px]'>
				<section className='container relative flex flex-col items-center justify-center gap-3 py-10'>
					<Title
						className='font-title animate-intro px-2 text-center text-5xl font-bold tracking-tight'
						style={{ viewTransitionName: 'blog-post-title' }}
					>
						<span
							className='blog-post-title'
							style={{ viewTransitionName: 'blog-post-title' }}
						>
							{post.title}
						</span>
					</Title>
					<Subtitle className='font-inter animate-intro text-base leading-[1rem] tracking-tight ![animation-delay:200ms] dark:text-gray-600'>
						{post.description}
					</Subtitle>
				</section>
				<Divider />
				<section className='container !sm:pb-0 font-inter animate-intro [] relative flex w-full flex-col gap-3 overflow-hidden py-10 text-justify font-[300] tracking-tight text-gray-800 dark:text-gray-300'>
					<PostBody>{post?.body}</PostBody>
				</section>
			</div>
		</div>
	);
};
Component.displayName = 'Blog Post';

export default Component;
