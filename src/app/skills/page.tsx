import { Metadata } from 'next';

import PageComponent from './component';

export const metadata: Metadata = {
	title: 'spxlato · Skills',
};

const Page = () => {
	return <PageComponent />;
};
Page.displayName = 'SkillsPage';

export default Page;
