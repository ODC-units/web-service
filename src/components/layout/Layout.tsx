import { ViewNotifications } from '@/modules/notifications';
import type { PropsWithChildren } from 'react';
import Header from '../header/Header';

export interface LayoutProps {
	padded?: boolean;
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
	padded = false,
	children,
}) => {
	return (
		<main className="flex flex-col h-screen overflow-hidden">
			<Header />
			<div
				className={`h-full relative ${
					padded ? 'sm:px-6 lg:px-8 py-6 lg:py-8 container mx-auto' : ''
				}`}
			>
				{children}
			</div>
			<div className="z-50 fixed bottom-0 left-0 right-0 pointer-events-none flex justify-center items-center">
				<div className="pointer-events-all">
					<ViewNotifications />
				</div>
			</div>
		</main>
	);
};

export default Layout;
