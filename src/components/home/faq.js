import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function FAQ() {
  return (
    <>
      <div id="faq" className="container mx-auto px-2 sm:px-6 lg:px-8  pb-16">
        <h2 className="text-center mb-8">Frequently Asked Questions</h2>
        <div className="w-full max-w-xl p-2 mx-auto bg-white rounded-2xl">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full p-4  text-left border border-slate-200 text-secondary  rounded-lg focus:outline-none">
                  <span>What is the utility?</span>
                  <div className="w-5 h-5 bg-secondary rounded-xl flex items-center justify-center">
                    <ChevronUpIcon className={`${open ? "transform rotate-180" : ""} w-4 h-4 text-white`} />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500">If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.</Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full p-4  text-left border border-slate-200 text-secondary  rounded-lg focus:outline-none">
                  <span>What is an NFTree?</span>
                  <div className="w-5 h-5 bg-secondary rounded-xl flex items-center justify-center">
                    <ChevronUpIcon className={`${open ? "transform rotate-180" : ""} w-4 h-4 text-white`} />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500">No.</Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full p-4  text-left border border-slate-200 text-secondary  rounded-lg focus:outline-none">
                  <span>What will the minting fee be?</span>
                  <div className="w-5 h-5 bg-secondary rounded-xl flex items-center justify-center">
                    <ChevronUpIcon className={`${open ? "transform rotate-180" : ""} w-4 h-4 text-white`} />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500">No.</Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full p-4  text-left border border-slate-200 text-secondary  rounded-lg focus:outline-none">
                  <span>When does minting start?</span>
                  <div className="w-5 h-5 bg-secondary rounded-xl flex items-center justify-center">
                    <ChevronUpIcon className={`${open ? "transform rotate-180" : ""} w-4 h-4 text-white`} />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500">No.</Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}
