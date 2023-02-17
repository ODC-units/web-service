import React from 'react';
import type { UseNotificationsResult } from '../../types';

const useNotificationsContext = (): UseNotificationsResult => {
	const [notifications, setNotifications] = React.useState<
		(Notification | string)[]
	>([]);

	const addNotification = React.useCallback(
		(notification: Notification | string) => {
			setNotifications((prev) => [...prev, notification]);
		},
		[]
	);

	return {
		notifications,
		addNotification,
	} as UseNotificationsResult;
};

export default useNotificationsContext;
