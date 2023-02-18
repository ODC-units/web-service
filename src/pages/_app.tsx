import { AuthProvider } from '@/modules/auth/AuthContext';
import { NotificationsProvider } from '@/modules/notifications';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NotificationsProvider>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</NotificationsProvider>
	);
}
