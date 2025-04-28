import type { IGame } from '@entities/Game';

export const sortAndSliceGames = (games?: IGame[]) => {
	if (!games) return [];

	return [...games]
		.sort((a, b) => {
			const dateA = new Date(`${a.date}T${a.time}`);
			const dateB = new Date(`${b.date}T${b.time}`);
			return dateB.getTime() - dateA.getTime();
		})
		.slice(0, 10);
};