import { $Either } from '../types/either';

export const fetchProjects = async (): Promise<
	$Either.Type<Project[], string>
> => {
	const baseUrl =
		process.env.ETHER_URL ?? 'https://foundation.unreal.sh/portfolio/';

	if (!baseUrl || baseUrl?.length === 0) {
		return $Either.makeRight(
			"Ether's API URL is not set. Couldn't fetch projects.",
		);
	}

	const url = new URL('projects', baseUrl);

	try {
		const res = await fetch(url.toString());

		if (!res.ok) {
			return $Either.makeRight(
				`Couldn't fetch projects. Status: ${res.status}.`,
			);
		}

		const data = (await res.json()) as Project[];

		if (!data) {
			return $Either.makeRight(
				'No data was returned while fetching projects.',
			);
		}

		return $Either.makeLeft(data);
	} catch (err: any) {
		console.error(err);
		return $Either.makeRight('Unknown error.');
	}
};
