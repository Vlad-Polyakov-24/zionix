'use client';

import { Button } from '@mui/material';

const Error = ({ reset }: { reset: () => void }) => (
	<div className={'not-found-page'}>
		<h1>Oops, something&#39;s wrong!</h1>
		<Button onClick={reset} size={'medium'} variant={'contained'}>Refresh the page</Button>
	</div>
);

export default Error;