import { FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import type { ControllerRenderProps } from 'react-hook-form';
import type { IFormData } from '@widgets/Game';
import { ThresholdSelectorField } from '../../model/types/ThresholdSelector.types';

type ThresholdSelectorProps = {
	className?: string;
	field: ControllerRenderProps<IFormData, 'threshold'>;
};

const ThresholdSelector = ({ className, field }: ThresholdSelectorProps) => (
	<FormControl className={className}>
		<RadioGroup
			row
			aria-labelledby={'Threshold selector'}
			{...field}
			sx={{
				width: '100%',
				justifyContent: 'center',
			}}
		>
			<FormControlLabel value={ThresholdSelectorField.UNDER} control={<Radio color={'secondary'} />} label={'Under'}/>
			<FormControlLabel value={ThresholdSelectorField.OVER} control={<Radio color={'secondary'} />} label={'Over'}/>
		</RadioGroup>
	</FormControl>
);

export default ThresholdSelector;