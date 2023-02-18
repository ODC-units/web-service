import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import type { PropsWithChildren } from 'react';

export interface SlidingPanelProps {
	open?: boolean;
	title?: string;
	onClose?: VoidFunction;
}

const SlidingPanel: React.FC<PropsWithChildren<SlidingPanelProps>> = ({
	children,
	open = false,
	title,
	onClose,
}) => {
	return (
		<Transition.Root show={open} onClick={onClose}>
			<div className="pointer-events-none absolute inset-y-0 right-0 flex max-w-full pl-10">
				<Transition.Child
					enter="transform transition ease-in-out duration-500 sm:duration-700"
					enterFrom="translate-x-full"
					enterTo="translate-x-0"
					leave="transform transition ease-in-out duration-500 sm:duration-700"
					leaveFrom="translate-x-0"
					leaveTo="translate-x-full"
				>
					<div className="pointer-events-auto relative w-screen max-w-md h-full">
						<div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-lg">
							<div className="px-4 sm:px-6 flex justify-between items-center">
								<div className="text-lg font-medium text-gray-900">{title}</div>
								<XMarkIcon
									className="h-6 w-6 cursor-pointer"
									aria-hidden="true"
									onClick={onClose}
								/>
							</div>
							<div className="relative mt-6 flex-1 px-4 sm:px-6">
								<div className="absolute inset-0 px-4 sm:px-6">{children}</div>
							</div>
						</div>
					</div>
				</Transition.Child>
			</div>
		</Transition.Root>
	);
};

export default SlidingPanel;
