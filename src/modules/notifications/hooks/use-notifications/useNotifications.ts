import React from 'react';
import { NotificationsContext } from '../../NotificationsContext';
import type { UseNotificationsResult } from '../../types';

const useNotifications = (): UseNotificationsResult => {
	const context = React.useContext(NotificationsContext);

	if (!context) {
		throw new Error(
			'useNotifications must be used within a NotificationsProvider'
		);
	}

	return context;
};

export default useNotifications;
