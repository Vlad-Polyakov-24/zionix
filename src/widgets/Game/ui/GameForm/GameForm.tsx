import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { classNames } from '@shared/lib/classNames';
import { ErrorMessage, MessageAlign } from '@shared/ui/ErrorMessage';
import { ThresholdSelector, ValueSelector } from '@entities/Game';
import { gameSchema } from '@shared/config/validation/validation';
import type { IFormData } from '@widgets/Game';
import styles from './GameForm.module.scss';

type GameFormProps = {
	className?: string;
	onSubmit: (data: IFormData) => void
};

const GameForm = ({ className, onSubmit }: GameFormProps) => {
	const { handleSubmit, control, formState: { errors } } = useForm<IFormData>({
		resolver: yupResolver(gameSchema),
		defaultValues: { threshold: '', userValue: 0 },
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classNames(styles.form, {}, [className])}>
			<div className={styles.form__group}>
				<Controller
					name={'threshold'}
					control={control}
					render={({ field }) => <ThresholdSelector field={field} />}
				/>
				{errors.threshold?.message && <ErrorMessage message={errors.threshold.message} align={MessageAlign.CENTER} />}
			</div>
			<div className={classNames(styles.form__group, {}, ['mt-32'])}>
				<Controller
					name={'userValue'}
					control={control}
					render={({ field }) => <ValueSelector field={field} />}
				/>
				{errors.userValue?.message && <ErrorMessage message={errors.userValue.message} />}
			</div>
			<Button
				sx={{ marginTop: 2 }}
				type={'submit'}
				variant={'contained'}
				color={'secondary'}
				fullWidth
			>
				PLAY
			</Button>
		</form>
	);
};

export { GameForm };