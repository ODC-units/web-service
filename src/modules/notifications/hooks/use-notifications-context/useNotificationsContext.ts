import React from 'react';
import type { Notification, UseNotificationsResult } from '../../types';

const useNotificationsContext = (): UseNotificationsResult => {
	const [notifications, setNotifications] = React.useState<Notification[]>([]);

	const removeNotification = React.useCallback((id: Notification['id']) => {
		setNotifications((prevNotifications) =>
			prevNotifications.filter((notification) => notification.id !== id)
		);
	}, []);

	const addNotification = React.useCallback(
		(notification: Omit<Notification, 'id'>) => {
			const newNotification: Notification = { ...notification, id: Date.now() };

			setNotifications((prevNotifications) => [
				...prevNotifications,
				newNotification,
			]);

			setTimeout(() => {
				removeNotification(newNotification.id);
			}, 5000);
		},
		[removeNotification]
	);

	return {
		notifications,
		addNotification,
		removeNotification,
	};
};

export default useNotificationsContext;
