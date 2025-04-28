import Link from 'next/link';
import { Button } from '@mui/material';
import { Routes } from '@shared/const/navigation/routes';

const NotFound = () => (
	<div className={'not-found-page'}>
		<h1>Page not found</h1>
		<Button component={Link} href={Routes.HOME} variant={'contained'} size={'medium'}>Home page</Button>
	</div>
);

export default NotFound;