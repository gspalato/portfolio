export const ExperienceTimeline: {
	role: string | React.ReactNode;
	place: string | React.ReactNode;
	mode: string | React.ReactNode;
	date: string | React.ReactNode;
	description: string | React.ReactNode;
}[] = [
	{
		role: 'Software Developer',
		place: 'G.WIND',
		mode: 'Freelance',
		date: 'Jun 2024 - Jul 2024',
		description: (
			<>
				• Developed a repair and task management bot, synchronized to
				the client's group chats on Telegram.
				<br />• Worked alongside the client to establish problem
				specifications and other system designs.
				<br />• Deployed the software and it's requisites, such as the
				MongoDB database, on the client's server, using Docker.
				<br />• Maintained support for the software, fixing bugs and
				scaling the software according to the client's needs.
			</>
		),
	},
	{
		role: 'Software Developer',
		place: 'G.WIND',
		mode: 'Freelance',
		date: 'Oct 2023 - Nov 2023',
		description: (
			<>
				• Developed an image upload automation and automatic report
				generation bot, synchronized to the cloud and the client's group
				chats on Telegram.
				<br />• Worked alongside the client to establish the software's
				requirements.
				<br />• Deployed the software on the client's cloud using
				Docker.
				<br />• Maintained support for the software, fixing bugs and
				scaling the tool according to the client's needs.
			</>
		),
	},
];
