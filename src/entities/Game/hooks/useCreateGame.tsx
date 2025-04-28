'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { errorHandler } from '@shared/lib/errorHandler';
import { gameKeys } from '../model/const/gameKeys';
import { gameApi } from '../api/gameApi';
import type { IGame } from '../model/types/Game.types';

const useCreateGame = () => {
	const queryClient = useQueryClient();

	const { mutate, mutateAsync, isPending, isSuccess, isError } = useMutation({
		mutationFn: gameApi.createGame,
		onMutate: async (newGame: Omit<IGame, 'id'>) => {
			await queryClient.cancelQueries({ queryKey: gameKeys.allGames });
			const tempId = crypto.randomUUID();
			const optimisticGame: IGame = { ...newGame, id: tempId };

			const previousGames = queryClient.getQueryData<IGame[]>(gameKeys.allGames) || [];

			queryClient.setQueryData<IGame[]>(gameKeys.allGames, (old = []) => [
				optimisticGame,
				...old,
			]);

			return { previousGames, tempId };
		},
		onSuccess: (serverGame, newGame, context) => {
			queryClient.setQueryData<IGame[]>(gameKeys.allGames, (old = []) =>
				old?.map(game => game.id === context?.tempId ? serverGame : game)
			);
		},
		onError: (error, newGame, context) => {
			queryClient.setQueryData(gameKeys.allGames, context?.previousGames);
			errorHandler(error);
		},
	});

	return { mutate, mutateAsync, isPending, isSuccess, isError };
};

export { useCreateGame };