'use client';

import React from 'react';

import ProjectCard from '@components/cards/ProjectCard/ProjectCard';
import Badge from '@components/decorations/Badge/Badge';
import Divider from '@components/decorations/Divider/Divider';
import PageWrapper from '@components/page/PageWrapper/PageWrapper';
import Subtitle from '@components/typography/Subtitle/Subtitle';
import Title from '@components/typography/Title/Title';

import { $Either } from '@lib/types/either';

type Props = {
	projectFetchResult: $Either.Type<Project[], string>;
};

const Component: React.FC<Props> = (props) => {
	const { projectFetchResult } = props;

	let success: boolean = false;
	let loading: boolean = true;
	let projects: Project[] | null;

	if ($Either.isRight(projectFetchResult)) {
		let err = $Either.unwrap(projectFetchResult);
		console.error(err);
		success = false;
		loading = false;
	} else {
		success = true;
		loading = false;
		projects = $Either.unwrap(projectFetchResult);
	}

	return (
		<PageWrapper className='flex items-center' includeNavbarPadding>
			<section className='container relative flex flex-col items-center justify-center gap-3 py-10'>
				<Badge text='Featured Projects' />
				<Title className='font-title px-2 text-center text-5xl font-bold tracking-tight'>
					My recent work.
				</Title>
				<Subtitle className='font-body px-4 text-center text-sm tracking-wide text-gray-800 md:max-w-[600px] dark:text-gray-300'>
					Check out some of the projects I've worked on recently.
					<br />
					These showcase my skills in full-stack (and a bit of
					systems) development.
				</Subtitle>
			</section>
			<Divider className='mx-auto w-2/3' />
			<section className='container flex h-auto w-full flex-col py-10 px-8 md:w-[clamp(600px,60vw,800px)]'>
				{success &&
					projects!.map((p, i) => (
						<ProjectCard
							key={i}
							containerClassName='min-w-[40%]'
							className='group flex flex-col gap-2 transition-all duration-300 hover:cursor-pointer'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								type: 'spring',
								ease: 'easeInOut',
								duration: 0.5,
								delay: i / 10,
							}}
							img={p.banner_url}
							title={p.name}
							description={p.description}
						/>
					))}
				{/*success && (
					<Masonry
						items={projects!}
						config={{
							columns: [1, 2],
							gap: [24, 12],
							media: [640, 768],
						}}
						render={(item, idx) => (
							<ProjectCard
								key={idx}
								containerClassName='min-w-[40%]'
								className='group flex flex-col gap-2 transition-all duration-300 hover:cursor-pointer'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									type: 'spring',
									ease: 'easeInOut',
									duration: 0.5,
									delay: idx / 10,
								}}
								img={item.banner_url}
								title={item.name}
								description={item.description}
							/>
						)}
					/>
				)*/}
				{loading && (
					<div className='flex h-full items-center justify-center'>
						<div className='border-overlay-1 h-16 w-16 animate-spin rounded-full border-b-4' />
					</div>
				)}
				{!success && !loading && (
					<div className='flex h-full items-center justify-center'>
						<h1 className='font-body text-md text-gray-200 dark:text-gray-800'>
							No projects found.
						</h1>
					</div>
				)}
			</section>
		</PageWrapper>
	);
};
Component.displayName = 'ProjectsPageComponent';

export default Component;
