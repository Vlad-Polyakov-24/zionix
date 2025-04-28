'use client';

import { useState } from 'react';
import { getRandomInteger } from '@shared/lib/getRandomInteger';
import { useToast } from '@shared/hooks/useToast';
import { useCreateGame, ThresholdSelectorField, type IGame } from '@entities/Game';

export const useGame = () => {
	const [currentResult, setCurrentResult] = useState<number | null>(null);
	const [comment, setComment] = useState<string | null>(null);
	const { mutate: createGame } = useCreateGame();
	const { success, error } = useToast();

	const playGame = (threshold: ThresholdSelectorField, userValue: number) => {
		const result = getRandomInteger(1, 100);
		let win = false;
		let newComment = '';

		if (threshold === ThresholdSelectorField.OVER) {
			win = result >= userValue;
			newComment = result >= userValue ? 'You won!' : 'You lost!\nNumber was lower';
		} else if (threshold === ThresholdSelectorField.UNDER) {
			win = result <= userValue;
			newComment = result <= userValue ? 'You won!' : 'You lost!\nNumber was higher';
		}

		const now = new Date();
		const tempGame: Omit<IGame, 'id'> = {
			date: now.toLocaleDateString(),
			time: now.toLocaleTimeString(),
			guess: `${threshold.charAt(0).toUpperCase()}${threshold.slice(1)} ${userValue}`,
			isWin: win,
			result,
		};

		createGame(tempGame);
		setCurrentResult(result);
		setComment(newComment);

		if (newComment) {
			if (win) {
				success(newComment);
			} else {
				error(newComment);
			}
		}
	};

	return { currentResult, comment, playGame };
};