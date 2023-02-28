import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from 'flowbite-react';
import type { PropsWithChildren } from 'react';

export interface SlidingPanelProps {
	open?: boolean;
	children?: React.ReactNode;
}

const SlidingPanel: React.FC<PropsWithChildren<SlidingPanelProps>> = ({
	open = false,
	children,
}) => {
	return (
		<Transition.Root show={open}>
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
						<div className="px-4 sm:px-6flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-lg">
							<div className="justify-between items-center">{children}</div>
						</div>
					</div>
				</Transition.Child>
			</div>
		</Transition.Root>
	);
};

export default SlidingPanel;
