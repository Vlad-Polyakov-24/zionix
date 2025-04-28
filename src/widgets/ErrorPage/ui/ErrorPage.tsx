import { Button } from '@mui/material';

const ErrorPage = () => {

	const reloadPage = () => {
		location.reload();
	};

	return (
		<section className={'not-found-page'}>
			<h1>Oops, something&#39;s wrong!</h1>
			<Button onClick={reloadPage} variant={'contained'}>Refresh</Button>
		</section>
	);
};

export { ErrorPage };
