import { TableBody, TableRow, TableCell } from '@mui/material';
import type { IGame } from '@entities/Game';

type TBodyProps = {
	className?: string;
	games: IGame[];
};

const TBody = ({ className, games }: TBodyProps) => (
	<TableBody className={className}>
		{games.map(({ id, date, time, guess, result, isWin }) => (
			<TableRow key={id}>
				<TableCell>{date}</TableCell>
				<TableCell>{time}</TableCell>
				<TableCell>{guess}</TableCell>
				<TableCell sx={{ color: isWin ? 'var(--color-green)' : 'var(--color-red-dark)' }}>{result}</TableCell>
			</TableRow>
		))}
	</TableBody>
);

export { TBody };