import { notFound } from 'next/navigation';
import React from 'react';

import { getPost } from '@lib/posts';

import BlogPost from './component';

type Props = {
	params: { slug: string };
};

const Component: React.FC<Props> = async ({ params }) => {
	const post = await getPost(params.slug);

	if (!post) return notFound();

	return <BlogPost post={post} />;
};
Component.displayName = 'Blog Post';

export default Component;
