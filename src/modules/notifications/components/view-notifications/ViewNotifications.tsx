import { Toast } from 'flowbite-react';
import useNotifications from '../../hooks/use-notifications/useNotifications';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export const ViewNotifications: React.FC = () => {
	const { notifications } = useNotifications();

	return (
		<div className="flex flex-col gap-4">
			{notifications.map((notification, i) => (
				<Toast key={i}>
					<ExclamationCircleIcon className="h-5 w-5" />
					<div className="ml-3 text-sm font-normal">
						{typeof notification === 'string'
							? notification
							: notification.message}
					</div>
					<Toast.Toggle />
				</Toast>
			))}
		</div>
	);
};
