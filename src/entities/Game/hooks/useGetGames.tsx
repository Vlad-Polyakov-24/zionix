'use client';

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { errorHandler } from '@shared/lib/errorHandler';
import { gameKeys } from '../model/const/gameKeys';
import { gameApi } from '../api/gameApi';

type UseGetGamesProps = {
	enabled?: boolean;
}

const useGetGames = ({ enabled = true }: UseGetGamesProps) => {
	const { data, isLoading, isSuccess, isError, error } = useQuery({
		queryKey: gameKeys.allGames,
		queryFn: gameApi.getGames,
		retry: 1,
		enabled,
	});

	useEffect(() => {
		if (isError) {
			errorHandler(error);
		}
	}, [isError, error]);

	return { data, isLoading, isSuccess, isError };
};

export { useGetGames };