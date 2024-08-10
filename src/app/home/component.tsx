'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { FadeLoader } from 'react-spinners';

import Badge from '@components/decorations/Badge/Badge';
import PageWrapper from '@components/page/PageWrapper/PageWrapper';
import Text from '@components/typography/Text/Text';
import Title from '@components/typography/Title/Title';

import ExperienceEntry from './components/ExperienceEntry';
import { Projects } from './components/Projects';

import cn from '@lib/classes';
import { useTabs } from '@lib/hooks/useTabs';

import { ExperienceTimeline } from '@data/experience';
import { Skills } from '@data/skills';
import { Socials } from '@data/socials';

type Props = {
	//projectFetchResult: $Either.Type<Project[], string>;
};

const Page: React.FC<Props> = (props) => {
	//const { projectFetchResult } = props;

	let success: boolean = true;
	let loading: boolean = false;
	let projects: Project[] | null;

	/*
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

	console.log(projects!);
	*/

	projects ??= [
		{
			name: 'Portfolio',
			description: 'My personal website, made with Next.js.',
			url: '',
			repository_url: 'https://github.com/gspalato/portfolio',
			banner_url: '',
		},
		{
			name: 'Project Oni',
			description: 'An in-development chat platform.',
			url: '',
			repository_url: 'https://github.com/theoniorg/services',
			banner_url: '',
		},
		{
			name: 'neo',
			description: 'A general-purpose discord bot made in Go.',
			url: '',
			repository_url: 'https://github.com/gspalato/neo',
			banner_url: '',
		},
		{
			name: 'Ecobucks',
			description:
				'A proof-of-concept app that rewards the proper disposal of waste.',
			url: '',
			repository_url: 'https://github.com/gspalato/ecobucks',
			banner_url: '',
		},
		{
			name: 'Echo',
			description: 'The back-end that powers Ecobucks.',
			url: '',
			repository_url: 'https://github.com/gspalato/echo',
			banner_url: '',
		},
	];

	const projectTabs = useState({
		tabs: projects.map((p) => ({
			title: p.name,
			description: p.description,
			href:
				p.url && p.url.length > 0
					? p.url
					: p.repository_url && p.repository_url.length > 0
						? p.repository_url
						: '',
		})),
	})[0];

	const css = useTabs(projectTabs);

	if (loading)
		return (
			<div className='flex h-full w-full items-center justify-center'>
				<FadeLoader />
			</div>
		);

	return (
		<PageWrapper className='flex h-screen w-full items-center'>
			<div className='w-content md:w-content-lg pb-[100px]'>
				<section className='container !sm:pb-0 relative flex w-full flex-col gap-3 overflow-hidden pt-10 pb-7'>
					<Title className='animate-intro flex items-center gap-3 text-2xl leading-[1.5rem] ![animation-delay:100ms]'>
						<Image
							src='/img/portrait.jpg'
							alt=''
							className='animate-intro inner-border aspect-square h-10 w-10 rounded-full object-cover'
							height={256}
							width={256}
						/>
						Gabriel Spalato Marques
					</Title>
					<Text className='animate-intro font-inter text-base leading-[1rem] tracking-tight text-gray-500 ![animation-delay:200ms]'>
						Full-stack developer & computer engineering student.
					</Text>
					<div className='animate-intro flex flex-row gap-4 pt-1 ![animation-delay:300ms]'>
						{Object.entries(Socials).map((e) => (
							<Link
								key={e[0]}
								href={e[1]}
								className='font-inter inline text-xs font-[500] italic leading-[.875rem] text-gray-500 hover:text-gray-600 hover:dark:text-gray-400'
							>
								{e[0]}{' '}
								<GoArrowUpRight className='-ml-0.5 inline text-xs text-neutral-500' />
							</Link>
						))}
					</div>
					<Badge
						icon='pulse'
						text='Available for work'
						className='justify-start p-0 pt-3 pl-1 font-medium italic tracking-tight shadow-none ![box-shadow:none] dark:text-gray-600'
					/>
				</section>
				<div className='h-px w-full bg-gray-500/20' />
				<section className='container !sm:pb-0 animate-intro relative flex w-full flex-col gap-3 py-7'>
					<Title className='animate-intro pb-2 text-lg font-medium leading-[1.5rem] ![animation-delay:400ms]'>
						Selected Work
					</Title>
					<div className='animate-intro flex flex-col gap-2 ![animation-delay:500ms]'>
						{success && <Projects {...css.tabProps} />}
						{(!success || projects.length === 0) && (
							<Text className='font-body text-md text-gray-300 dark:text-gray-700'>
								No projects found.
							</Text>
						)}
					</div>
				</section>
				<section className='container !sm:pb-0 relative flex w-full flex-col gap-3 py-7'>
					<Title className='animate-intro pb-2 text-lg font-medium leading-[1.5rem] ![animation-delay:600ms]'>
						Skills
					</Title>
					<div className='animate-intro flex flex-row flex-wrap gap-2 ![animation-delay:700ms]'>
						{Skills.toSorted().map((s, i) => (
							<Badge
								key={s}
								className={cn(
									'inline-block bg-gray-500/10 p-1.5 px-2.5',
								)}
								text={s}
							/>
						))}
					</div>
				</section>
				<section className='container !sm:pb-0 relative flex w-full flex-col gap-3 py-7'>
					<Title className='animate-intro pb-2 text-lg font-medium leading-[1.5rem] ![animation-delay:800ms]'>
						Work
					</Title>
					<div className='animate-intro flex flex-col gap-1 ![animation-delay:900ms]'>
						{ExperienceTimeline.map((v, i) => (
							<ExperienceEntry
								key={i}
								description={v.description}
								date={v.date}
								role={v.role}
								place={v.place}
							/>
						))}
					</div>
				</section>
			</div>
		</PageWrapper>
	);
};
Page.displayName = 'HomePageComponent';

export default Page;
