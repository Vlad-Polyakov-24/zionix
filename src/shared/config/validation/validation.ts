import * as yup from 'yup';
import { ThresholdSelectorField } from '@entities/Game';

export const gameSchema = yup.object({
	threshold: yup.mixed<ThresholdSelectorField | ''>()
		.oneOf([ThresholdSelectorField.UNDER, ThresholdSelectorField.OVER], 'Choose threshold')
		.required('Required field'),
	userValue: yup.number()
		.min(1, 'Min 1')
		.max(100, 'Max 100')
		.required('Enter the number'),
});