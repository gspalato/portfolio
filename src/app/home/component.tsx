'use client';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';

import Badge from '@components/decorations/Badge/Badge';
import PageWrapper from '@components/page/PageWrapper/PageWrapper';
import Typography from '@components/typography';
import GridPattern from '@components/vfx/GridPattern/GridPattern';
import { Spotlight } from '@components/vfx/Spotlight/Spotlight';

import cn from '@lib/classes';
import { $Either } from '@lib/types/either';

const AnimatedBadge = motion(Badge);

type Props = {
	projectFetchResult: $Either.Type<Project[], string>;
};

const Page: React.FC<Props> = (props) => {
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

	const title = "Hi, I'm Gabriel!";
	const description = `A computer engineering student.
	Currently doing some freelance work, but looking for a job.`;

	return (
		<PageWrapper className='pb-nav flex h-screen items-center md:pb-0'>
			<GridPattern
				className={cn(
					'opacity-50',
					'[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]',
				)}
			/>
			<section className='container !sm:pb-0 relative flex h-full w-full flex-col items-center justify-center gap-6 overflow-hidden px-8 lg:w-6xl'>
				<AnimatePresence>
					<div className='flex w-full max-w-[800px] flex-col items-center gap-3'>
						{/* md:items-start */}
						<div className='container relative mx-auto flex w-full flex-col-reverse items-center justify-between gap-6'>
							{/* md:flex-row md:gap-3 */}
							<div className='flex flex-row items-center gap-3'>
								<div className='hidden aspect-square h-[7vw] w-[7vw] rounded-md bg-transparent bg-gradient-to-br from-[#4f79f9] to-[#2948ff] object-cover md:h-[3.25rem] md:w-[3.25rem]' />
								<Typography.Title className='text-[7.5vw] font-[700] leading-[7.5vw] tracking-tight md:text-6xl'>
									{title.split(' ').map((v, i) => (
										<motion.span
											initial='initial'
											animate='show'
											exit='initial'
											variants={{
												initial: { opacity: 0, y: 100 },
												show: { opacity: 1, y: 0 },
											}}
											transition={{
												duration: 1,
												delay: i / 10,
												ease: 'easeInOut',
											}}
											key={i}
										>
											{v}{' '}
										</motion.span>
									))}
									<span className='inline-block [transform-origin:70%_70%] [animation:wave_2.5s_infinite]'>
										👋
									</span>
								</Typography.Title>
							</div>
							<AnimatedBadge
								icon='pulse'
								text='Available for work!'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.5,
									delay: 1,
								}}
								className='z-10 w-auto md:h-min'
							/>
						</div>
						<Typography.Subtitle className='font-inter text-light-overlay-400 dark:text-dark-overlay-400 w-full text-center text-[6vw] font-[300] leading-[6vw] md:text-lg'>
							{/* md:text-left */}
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.5,
									delay: 2,
								}}
							>
								Full-stack developer & student.
							</motion.span>
						</Typography.Subtitle>
						<Typography.Text className='hidden max-w-lg pt-2 px-5 text-center text-gray-800 md:max-w-none md:px-0 md:text-left dark:text-gray-200'>
							<motion.span
								initial='initial'
								animate='show'
								exit='initial'
								variants={{
									initial: { opacity: 0 },
									show: { opacity: 1 },
								}}
								transition={{
									duration: 0.5,
									delay: 2.75,
								}}
							>
								{description}
							</motion.span>
						</Typography.Text>
					</div>
				</AnimatePresence>
			</section>
		</PageWrapper>
	);
};

export default Page;
