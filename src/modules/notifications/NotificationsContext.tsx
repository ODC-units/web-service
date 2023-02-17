import type { PropsWithChildren } from 'react';
import React from 'react';
import useNotificationsContext from './hooks/use-notifications-context/useNotificationsContext';
import type { NotificationsContextType } from './types';

const NotificationsContext = React.createContext<NotificationsContextType>({
	notifications: [],
	addNotification: () => {},
	removeNotification: () => {},
});

const NotificationsProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const notificationsContext = useNotificationsContext();

	return (
		<NotificationsContext.Provider value={notificationsContext}>
			{children}
		</NotificationsContext.Provider>
	);
};

export { NotificationsContext, NotificationsProvider };
