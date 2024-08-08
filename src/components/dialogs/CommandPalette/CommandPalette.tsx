'use client';

import { FileTextIcon } from '@radix-ui/react-icons';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaXmark } from 'react-icons/fa6';

import Dialog from '@/components/dialogs/Dialog/Dialog';

import { SOCIAL_LINKS } from '@/constants';

const Commands: {
	group: string;
	options: ({
		icon: any;
		label: string;
		onSelect: (
			value: string,
			navigate: ReturnType<typeof useRouter>,
		) => void;
	} & Omit<React.ComponentProps<typeof Command.Item>, 'onSelect'>)[];
}[] = [
	/*
	{
		group: 'Pages',
		options: routes.map((r) => ({
			icon: r.icon,
			label: r.name,
			onSelect: (_, router) => router.push(r.path),
		})),
	},
	*/
	{
		group: 'Socials',
		options: [
			{
				icon: <FaGithub />,
				label: 'GitHub',
				onSelect: () => window.open(SOCIAL_LINKS.github),
			},
			{
				icon: <FaInstagram />,
				label: 'Instagram',
				onSelect: () => window.open(SOCIAL_LINKS.instagram),
			},
			{
				icon: <FaLinkedin />,
				label: 'LinkedIn',
				onSelect: () => window.open(SOCIAL_LINKS.linkedin),
			},
			{
				icon: <FileTextIcon className='pb-px' />,
				label: 'Resume',
				onSelect: () => window.open(SOCIAL_LINKS.resume),
			},
		],
	},
];

///

type Props = {};

const Component: React.FC<Props> = () => {
	const [open, setOpen] = React.useState(false);

	const router = useRouter();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			} else if (e.key === 'Escape' && open) {
				e.preventDefault();
				setOpen(false);
			}
		};
		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

	return (
		<>
			<Dialog
				isOpen={open}
				setOpen={setOpen}
				className='cmdk-palette flex items-center justify-center'
			>
				<Command>
					<Command.Input placeholder='Type your command.' />
					<Command.List>
						<Command.Empty>No results found.</Command.Empty>

						{Commands.map((c) => (
							<Command.Group key={c.group} heading={c.group}>
								{c.options.map((o) => (
									<Command.Item
										key={o.label}
										{...o}
										onSelect={(v) =>
											o.onSelect && o.onSelect(v, router)
										}
									>
										{o.icon} {o.label}
									</Command.Item>
								))}
							</Command.Group>
						))}

						<Command.Separator />
						<Command.Separator />

						<Command.Item onSelect={() => setOpen(false)}>
							<FaXmark /> Close Palette
						</Command.Item>
					</Command.List>
				</Command>
			</Dialog>
		</>
	);
};

export default Component;
