import type { ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/system';
import { theme } from '../config/theme';

type ThemeProviderProps = {
	children?: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => (
	<MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
);

export default ThemeProvider;