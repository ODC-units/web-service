import { useAuth } from '@/modules/auth';
import { getUserToken } from '@/modules/auth/utils';
import { getIdToken } from 'firebase/auth';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { NavbarCollapse } from 'flowbite-react/lib/esm/components/Navbar/NavbarCollapse';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Header: React.FC = () => {
	const { pathname } = useRouter();
	const { user, logout } = useAuth();

	const handleLogout = React.useCallback(() => {
		void logout();
	}, [logout]);

	const copyToken = React.useCallback(async () => {
		try {
			if (user) {
				const token = await getIdToken(user);
				navigator.clipboard.writeText(token);
			}
		} catch (error) {
			console.error(error);
		}
	}, []);

	return (
		<Navbar className="border-b lg:py-6 px-4 sm:px-6 lg:px-8">
			Open Shelter Api
			<div className="flex md:order-2">
				{user && (
					<Dropdown arrowIcon={false} inline={true} label={<Avatar rounded />}>
						<Dropdown.Header>
							<span className="block truncate text-sm font-medium">
								{user?.email}
							</span>
						</Dropdown.Header>
						<Dropdown.Item onClick={copyToken}>
							<span className="block truncate text-sm font-medium">
								Copy JWT Token
							</span>
						</Dropdown.Item>
						<Dropdown.Item onClick={copyToken}>
							<span className="block truncate text-sm font-medium">
								{user.displayName}
							</span>
						</Dropdown.Item>
						<Dropdown.Item onClick={handleLogout}>
							<span className="text-red-600 text-sm font-medium">Sign out</span>
						</Dropdown.Item>
					</Dropdown>
				)}
				{!user && (
					<Navbar.Collapse>
						<Button.Group>
							<Button color="gray">
								<Link href={`/login`}>Login</Link>
							</Button>
							<Button color="gray">
								<Link href={`/register`}>Register</Link>
							</Button>
						</Button.Group>
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
				<Navbar.Link href="/archive" active={pathname === '/archive'}>
					Archive
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
