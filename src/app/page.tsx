import { Metadata } from 'next';

import { fetchProjects } from '@lib/api/projects';

import Home from './home/component';

export const metadata: Metadata = {
	title: 'spxlato · Home',
};

const Page = async () => {
	/// Currently, I'm manually selecting the projects to display.
	/// In the future, I'll fetch them from GitHub.

	// const result = await fetchProjects();

	return <Home />;
};

export default Page;
