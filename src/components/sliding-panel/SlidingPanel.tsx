import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Table } from 'flowbite-react';
import type { PropsWithChildren } from 'react';

export interface SlidingPanelProps {
	open?: boolean;
	name?: string;
  description?: string;
  province?: string;
  region?: string;
  country?: string;
  beds?: number;
  url?: string;
	onClose?: VoidFunction;
}

const SlidingPanel: React.FC<PropsWithChildren<SlidingPanelProps>> = ({
	children,
	open = false,
	name,
  description,
  province,
  region,
  country,
  beds,
  url,
	onClose,
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
						<div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-lg">
              <XMarkIcon
                className="h-6 w-6 cursor-pointer"
                aria-hidden="true"
                onClick={onClose}
              />
							<div className="px-4 sm:px-6 justify-between items-center">
                <Table striped={true}>
                  <Table.Head>
                    <Table.HeadCell>
                      Field
                    </Table.HeadCell>
                    <Table.HeadCell>
                      Value
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Name
                      </Table.Cell>
                      <Table.Cell>
                        {name}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Description
                      </Table.Cell>
                      <Table.Cell>
                        {description}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Province
                      </Table.Cell>
                      <Table.Cell>
                        {province}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Region
                      </Table.Cell>
                      <Table.Cell>
                        {region}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Country
                      </Table.Cell>
                      <Table.Cell>
                        {country}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Beds
                      </Table.Cell>
                      <Table.Cell>
                        {beds}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Website
                      </Table.Cell>
                      <Table.Cell>
                        {url}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
						</div>
					</div>

          

				</Transition.Child>
			</div>
		</Transition.Root>
	);
};

export default SlidingPanel;
