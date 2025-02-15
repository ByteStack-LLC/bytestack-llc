import Link from "next/link";
import { PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const HamburgerDropdown = () => {
  return (
    <div>
      <div className="flex grow items-center justify-end sm:hidden">
        <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open Menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
      </div>

      <PopoverPanel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div className="-mr-2">
                <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  style={{ fontSize: "1.6rem" }}
                  href="about"
                >
                  Services
                </Link>
                <Link
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  style={{ fontSize: "1.6rem" }}
                  href="services"
                >
                  Resources
                </Link>
                <Link
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  style={{ fontSize: "1.6rem" }}
                  href="contact"
                >
                  Company
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </div>
  );
};

export default HamburgerDropdown;
