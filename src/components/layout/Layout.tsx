import { ViewNotifications } from '@/modules/notifications';
import type { PropsWithChildren } from 'react';
import Header from '../header/Header';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className="flex flex-col h-screen">
			<Header />
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 flex-grow flex flex-col">
				{children}
			</div>
			<div className="mx-auto py-6 lg:py-8">
				<ViewNotifications />
			</div>
		</main>
	);
};

export default Layout;
