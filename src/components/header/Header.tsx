import { useAuth } from '@/modules/auth';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useRouter } from 'next/router';
import React from 'react';

const Header: React.FC = () => {
	const { pathname } = useRouter();
	const { user, logout } = useAuth();

	const handleLogout = React.useCallback(() => {
		void logout();
	}, [logout]);

	return (
		<Navbar className="border-b lg:py-6 px-4 sm:px-6 lg:px-8">
			api
			<div className="flex md:order-2">
				{user && (
					<Dropdown arrowIcon={false} inline={true} label={<Avatar rounded />}>
						<Dropdown.Header>
							<span className="block truncate text-sm font-medium">
								{user?.email}
							</span>
						</Dropdown.Header>
						<Dropdown.Item onClick={handleLogout}>
							<span className="text-red-600 text-sm font-medium">Sign out</span>
						</Dropdown.Item>
					</Dropdown>
				)}
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link href="/" active={pathname === '/'}>
					Home
				</Navbar.Link>
				<Navbar.Link
					href="/documentation"
					active={pathname === '/documentation'}
				>
					API Documentation
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
