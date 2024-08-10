import { Metadata } from 'next';
import React from 'react';

import getPosts from '@lib/posts';

import Blog from './component';

export const metadata: Metadata = {
	title: 'spxlato · Blog',
};

const Page: React.FC = async () => {
	const posts = await getPosts();

	return <Blog posts={posts} />;
};
Page.displayName = 'BlogPage';

export default Page;
