import { createClient } from '@supabase/supabase-js';

export enum supabaseTables {
	GAMES = 'games',
}

const createSupabaseClient = () => {
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

	if (!supabaseUrl || !supabaseKey) {
		throw new Error('Supabase URL and/or Key are not defined!');
	}

	return createClient(supabaseUrl, supabaseKey);
};

const supabase = createSupabaseClient();

export { supabase };