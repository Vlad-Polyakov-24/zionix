import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ErrorBoundary } from '@globals/providers/ErrorBoundary';
import { ThemeProvider } from '@globals/providers/MUIProvider';
import '@globals/styles/index.scss';

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
	title: 'zionix',
	description: 'Developed by Vlad Poliakov',
	icons: {
		icon: '/favicon.ico',
	},
};

interface IRootLayout {
	children: ReactNode;
}

const RootLayout = async ({ children }: IRootLayout) => (
	<html lang={'en'}>
	<body className={roboto.variable}>
	<AppRouterCacheProvider>
		<ErrorBoundary>
			<ThemeProvider>
				{children}
				<ToastContainer />
			</ThemeProvider>
		</ErrorBoundary>
	</AppRouterCacheProvider>
	</body>
	</html>
);

export default RootLayout;
