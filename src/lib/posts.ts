import matter from 'gray-matter';
import path from 'path';
import { cache } from 'react';

import fs from 'fs/promises';

export type Post = {
	id: string;
	[key: string]: any;
	body: any;
};

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = cache(async () => {
	const posts = await fs.readdir('./posts/');

	return Promise.all(
		posts
			.filter((file) => path.extname(file) === '.mdx')
			.map(async (file) => {
				const filePath = `./posts/${file}`;
				const postContent = await fs.readFile(filePath, 'utf8');
				const { data, content } = matter(postContent);

				if (data.published === false) {
					return null;
				}

				return {
					id: path.parse(file).name.toLowerCase(),
					...data,
					body: content,
				} as Post;
			}),
	);
});

export async function getPost(id: string) {
	const posts = await getPosts();
	return posts.find((post) => post!.id === id);
}

export default getPosts;
