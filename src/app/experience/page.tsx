import { Metadata } from 'next';

import PageComponent from './component';

export const metadata: Metadata = {
	title: 'spxlato · Experience',
};

const Page: React.FC = () => {
	return <PageComponent />;
};
Page.displayName = 'ExperiencePage';

export default Page;
