import type { ReactNode } from 'react';

interface IPagesLayoutProps {
	children: ReactNode;
}

const PagesLayout = async ({ children }: IPagesLayoutProps) => (
	<>
		<main className={'main'}>{children}</main>
	</>
);

export default PagesLayout;
