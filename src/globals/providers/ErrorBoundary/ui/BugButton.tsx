'use client';

import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

export const BugButton = () => {
	const [error, setError] = useState(false);

	const onThrow = () => setError(true);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return <Button onClick={onThrow}>throw error</Button>;
};
