import { Table, TableContainer } from '@mui/material';
import { THead } from '../THead/THead';
import { TBody } from '../TBody/TBody';
import type { IGame } from '@entities/Game';

type ResultTableProps = {
	className?: string;
	games: IGame[];
};

const ResultTable = ({ className, games }: ResultTableProps) => (
	<TableContainer className={className}>
		<Table sx={{ minWidth: 650 }} aria-label={'Game result table'}>
			<THead />
			<TBody games={games} />
		</Table>
	</TableContainer>
);

export default ResultTable;