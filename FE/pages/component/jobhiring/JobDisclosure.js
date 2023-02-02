import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const JobDisclosure = ({ title, children }) => {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <div className="border-b pb-5">
          <Disclosure.Button className="py-2 flex w-full justify-between font-medium">
            {title}
            <ChevronDownIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-gray-500`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>{children}</Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default JobDisclosure;
