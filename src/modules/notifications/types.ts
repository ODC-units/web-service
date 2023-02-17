export interface UseNotificationsResult {
	notifications: (Notification | string)[];
	addNotification: (notification: Notification | string) => void;
}

export interface Notification {
	title: string;
	message: string;
	severity: 'info' | 'success' | 'warning' | 'error';
}

export type NotificationsContextType = UseNotificationsResult;
