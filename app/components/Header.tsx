import Image from "next/image";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import "../globals.css";

export default function Header() {
  return (
    <Popover
      className={
        "container mx-auto flex items-center border-b-2 px-6 py-2 h-16"
      }
    >
      <div className="flex items-center justify-start gap-2 md:gap-5">
        <Image
          className="dark:invert"
          src="/file.svg"
          alt="temporary logo"
          width={40}
          height={20}
        />
        <Link href="home">
          <h1 className="font-bold" id="logo-text">
            ByteStack
          </h1>
        </Link>
      </div>

      <div className="grow ">
        <div className="hidden sm:flex items-center justify-end gap-2 md:gap-20">
          <Link href="about" id="text">
            Services
          </Link>
          <Link href="services" id="text">
            Resources
          </Link>
          <Link href="contact" id="text">
            Company
          </Link>
        </div>
      </div>

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
    </Popover>
  );
}
