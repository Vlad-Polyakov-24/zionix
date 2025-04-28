import { supabase, supabaseTables } from '@shared/config/supabase/supabase';
import { type IGame } from '../model/types/Game.types';

export const gameApi = {
	getGames: async (): Promise<IGame[]> => {
		const { data, error } = await supabase
			.from(supabaseTables.GAMES)
			.select('*')

		if (error) {
			throw new Error(error.message);
		}

		return data;
	},
	createGame: async (game: Omit<IGame, 'id'>) => {
		const { data, error } = await supabase
			.from(supabaseTables.GAMES)
			.insert(game)
			.select()
			.single();

		if (error) {
			throw new Error(error.message);
		}

		return data;
	},
};