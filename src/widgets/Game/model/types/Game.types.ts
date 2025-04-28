import { ThresholdSelectorField } from '@entities/Game';

export type IFormData = {
	threshold: ThresholdSelectorField | '';
	userValue: number;
};