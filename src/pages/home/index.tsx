import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { LiaArrowDownSolid } from 'react-icons/lia';
import { Masonry } from 'react-plock';

import Badge from '@components/Badge/Badge';
import Divisor from '@components/Divisor';
import PageWrapper from '@components/PageWrapper';

import { CardBody, CardContainer, CardItem } from '@/components/3DCard';

import classes from '@lib/classes';

import { useProjects } from '@/lib/api/projects';

import Styles from './Home.module.css';

import ProjectCard from './components/ProjectCard';

const AnimatedBadge = motion(Badge);
const AnimatedProjectCard = motion(ProjectCard);

const Page = () => {
	const { fetchProjects, projects, success, loading } = useProjects();

	useEffect(() => {
		fetchProjects();
	}, []);

	useEffect(() => {
		console.log(projects);
	}, [projects]);

	const heroTextClassnamesMobile = classes(
		'text-glow font-title text-center text-[17.5vw] font-bold leading-[17.5vw] tracking-tight text-[#eee] sm:hidden',
		Styles.hero_text_glow,
	);

	const heroTextClassnamesDesktop = classes(
		'text-glow font-title hidden text-center text-[10vw] font-bold leading-[10vw] tracking-tight text-[#eee] sm:block md:text-[90px] md:leading-[90px]',
		Styles.hero_text_glow,
	);

	const projectsSectionClassnames = classes(
		'container flex w-full flex-col gap-20 pt-20 px-8 lg:w-5xl lg:px-0',
		success ? 'min-h-screen' : 'pb-20',
	);

	return (
		<PageWrapper className='flex items-center' includeNavbarPadding>
			<section className='container !sm:pb-0 relative flex h-[100dvh] flex-col items-center justify-center gap-6 lg:w-6xl'>
				<AnimatedBadge text='Available for work!' />
				<AnimatePresence>
					<motion.h1
						key='hero-text-desktop'
						className={heroTextClassnamesDesktop}
					>
						Full-stack developer
						<br />& computer engineering
						<br />
						student.
					</motion.h1>
					<motion.h1
						key='hero-text-mobile'
						className={heroTextClassnamesMobile}
					>
						Full-stack
						<br />
						developer
						<br />& computer
						<br />
						engineering
						<br />
						student.
					</motion.h1>
				</AnimatePresence>
				<div
					key='hero-background-glow'
					className={classes(
						Styles.hero_background_glow,
						Styles.hero_background_glow_center,
					)}
				/>
				<LiaArrowDownSolid
					size={30}
					className='text-overlay-4 animate-bounce text-4xl'
				/>
			</section>
			<Divisor />
			<section className={projectsSectionClassnames}>
				<h1 className='font-title text-text text-center text-5xl'>
					Projects
				</h1>
				{success && (
					<Masonry
						items={projects}
						config={{
							columns: [1, 2],
							gap: [24, 12],
							media: [640, 768],
						}}
						render={(item, idx) => (
							<AnimatedProjectCard
								key={idx}
								containerClassName='min-w-[40%]'
								className='hover:bg-overlay-1 group hover:border-overlay-1 flex flex-col gap-3 border-none transition-all transition-all duration-300 duration-300 hover:scale-101 hover:cursor-pointer'
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{
									type: 'spring',
									ease: 'easeInOut',
									duration: 0.35,
								}}
								img={item.banner_url}
								title={item.name}
								description={item.description}
							/>
						)}
					/>
				)}
				{loading && (
					<div className='flex h-full items-center justify-center'>
						<div className='border-overlay-1 h-16 w-16 animate-spin rounded-full border-b-4' />
					</div>
				)}
				{!success && !loading && (
					<div className='flex h-full items-center justify-center'>
						<h1 className='font-body text-text-tertiary text-md'>
							No projects found.
						</h1>
					</div>
				)}
			</section>
		</PageWrapper>
	);
};

export default Page;
