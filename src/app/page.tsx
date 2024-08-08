import { Metadata } from 'next';

import { fetchProjects } from '@lib/api/projects';

import Home from './home/rewrite';

export const metadata: Metadata = {
	title: 'spxlato · Home',
};

const Page = async () => {
	const result = await fetchProjects();

	return <Home projectFetchResult={result} />;
};

export default Page;
