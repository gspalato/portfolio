import React from 'react';

import getPosts from '@lib/posts';

import Blog from './component';

type Props = {
	className?: string;
} & React.PropsWithChildren;

const Component: React.FC<Props> = async (props) => {
	const posts = await getPosts();

	return <Blog posts={posts} />;
};
Component.displayName = 'Blog';

export default Component;
