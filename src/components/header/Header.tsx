import { useAuth } from '@/modules/auth';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { NavbarCollapse } from 'flowbite-react/lib/esm/components/Navbar/NavbarCollapse';
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
				{!user && (
					<Navbar.Collapse>
						<Navbar.Link href="/login" active={pathname === '/login'}>
							<Button className="bg-pink-500 text-white active:bg-pink-600 hover:bg-pink-600 font-bold text-xs px-4 py-2 rounded">
								<span className="text-sm font-medium">Sign in</span>
							</Button>
						</Navbar.Link>
					</Navbar.Collapse>
				)}
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
				<Navbar.Link href="/form" active={pathname === '/form'}>
					Contribute
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
