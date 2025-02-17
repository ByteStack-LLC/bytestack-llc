import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const ServicesDropdown = () => {
  return (
    <div className="text-sm/6 font-semibold text-white/50">
      <Popover>
        <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white transition duration-300 hover:scale-110">
          Services
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom"
          className="divide-y divide-black/85 rounded-xl bg-black/85 dark:divid-white/85 dark:bg-white/85 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity:0"
        >
          <div className="p-2 hover:bg-slate-500 dark:hover:bg-slate-100 text-center">
            <Link
              href="/fullstack"
              className="text-gray-300 transition-colors  dark:text-black"
            >
              Full-Stack Development
            </Link>
          </div>
          <div className="p-2 hover:bg-slate-500 dark:hover:bg-slate-100 text-center">
            <Link
              href="/data-engineering"
              className="text-gray-300 transition-colors  dark:text-black"
            >
              Data Engineering
            </Link>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default ServicesDropdown;
