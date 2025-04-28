import { TableCell, TableHead, TableRow } from '@mui/material';
import { columns } from '../../model/data/table.data';

type THeadProps = {
	className?: string;
};

const THead = ({ className }: THeadProps) => (
	<TableHead className={className}>
		<TableRow>
			{columns.map((column) => <TableCell key={column}>{column}</TableCell>)}
		</TableRow>
	</TableHead>
);

export { THead };