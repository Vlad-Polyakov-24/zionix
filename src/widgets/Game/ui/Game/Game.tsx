'use client';

import { useCallback, useMemo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { sortAndSliceGames } from '../../lib/sortAndSliceGames';
import { Result } from '@shared/ui/Result';
import { Loader } from '@shared/ui/Loader';
import { useGetGames } from '@entities/Game';
import { ResultTable } from '@features/ResultTable';
import { useGame } from '../../hooks/useGame';
import { GameForm } from '../GameForm/GameForm';
import type { IFormData } from '../../model/types/Game.types';
import styles from './Game.module.scss';

type GameProps = {
	className?: string;
};

const Game = ({ className }: GameProps) => {
	const { data: games, isLoading } = useGetGames({ enabled: true });
	const { currentResult, playGame } = useGame();
	const sortedGames = useMemo(() => sortAndSliceGames(games), [games]);

	const onSubmit = useCallback((data: IFormData) => {
		if (data.threshold && data.userValue) {
			playGame(data.threshold, data.userValue);
		}
	}, [playGame]);

	return (
		<div className={classNames(styles.game, {}, [className])}>
			<div className={styles.game__inner}>
				<Result result={currentResult} />
				<GameForm onSubmit={onSubmit} />
			</div>
			{isLoading && <Loader className={'m-centred'} />}
			{games && games.length > 0 && <ResultTable games={sortedGames} />}
		</div>
	);
};

export default Game;