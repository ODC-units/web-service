export interface UseNotificationsResult {
	notifications: Notification[];
	addNotification: (notification: Omit<Notification, 'id'>) => void;
	removeNotification: (id: Notification['id']) => void;
}

export interface Notification {
	id: number;
	title: string;
	message?: string;
	severity: 'info' | 'success' | 'warning' | 'error';
}

export type NotificationsContextType = UseNotificationsResult;
