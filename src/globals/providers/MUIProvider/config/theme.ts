'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: 'var(--font-roboto)',
	},
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				input: {
					padding: '4px 10px',
				},
			},
		},
	},
	colorSchemes: {
		light: true,
		dark: true,
	},
});

export { theme };