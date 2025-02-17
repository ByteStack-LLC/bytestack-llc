import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const ServicesDropdown = () => {
  return (
    <div className="text-sm/6 font-semibold text-white/50">
      <Popover>
        <PopoverButton className="block text-sm/6 font-semibold text-white/50">
          Services
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom"
          className="divide-y divide-white/2 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity:0"
        >
          <div className="p-3">
            <Link
              href="/fullstack"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Full-Stack Development
            </Link>
          </div>
          <div className="p-3">
            <Link
              href="/data-engineering"
              className="text-gray-300 hover:text-white transition-colors"
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
