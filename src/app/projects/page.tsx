import { Metadata } from 'next';

import { fetchProjects } from '@lib/api/projects';

import PageComponent from './component';

export const metadata: Metadata = {
	title: 'spxlato · Projects',
};

const Page = async () => {
	const result = await fetchProjects();

	return <PageComponent projectFetchResult={result} />;
};

export default Page;
