import { Slider } from '@mui/material';
import type { ControllerRenderProps } from 'react-hook-form';
import { generateMarks } from '../../lib/generateMarks';
import type { IFormData } from '@widgets/Game';

type ValueSelectorProps = {
	className?: string;
	field: ControllerRenderProps<IFormData, 'userValue'>;
};

const ValueSelector = ({ className, field }: ValueSelectorProps) => (
	<Slider
		className={className}
		color={'secondary'}
		aria-label={'User value'}
		valueLabelDisplay={'auto'}
		shiftStep={30}
		step={1}
		min={0}
		max={100}
		marks={generateMarks}
		{...field}
		value={field.value ?? 0}
	/>
);

export default ValueSelector;