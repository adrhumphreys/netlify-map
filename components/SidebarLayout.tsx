import React, { Fragment, ReactChildren, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { FilterIcon } from "@heroicons/react/solid";
import ListMap from "./ListMap";

const SidebarLayout = ({
  children,
  sidebar,
  sidebarTitle,
}: {
  children: any;
  sidebar: JSX.Element;
  sidebarTitle?: string;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Sidebar */}
                {sidebar ? (
                  <form className="mt-4 border-t border-gray-200">
                    {sidebarTitle ? (
                      <h3 className="sr-only">{sidebarTitle}</h3>
                    ) : null}
                    {sidebar ? sidebar : sidebar}
                  </form>
                ) : null}
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="px-4 sm:px-6 lg:px-4 lg:pt-4">
          <div className="relative z-10 flex items-baseline justify-between pb-4 pt-4 lg:hidden">
            <div>Mobile title</div>
            <div className="flex items-center">
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Sidebar */}
              {sidebar ? (
                <form className="hidden lg:block">
                  {sidebarTitle ? (
                    <h3 className="sr-only">{sidebarTitle}</h3>
                  ) : null}
                  {sidebar ? sidebar : sidebar}
                </form>
              ) : null}

              {/* Content */}
              <div className="lg:col-span-3">{children}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
