import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const CompanyDropdown = () => {
  return (
    <div className="text-sm/6 font-semibold text-white/50">
      <Popover>
        <PopoverButton className="block text-sm/6 font-semibold text-white/50">
          Company
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom"
          className="divide-y divide-white/2 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity:0"
        >
          <div className="p-3">
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </Link>
          </div>
          <div className="p-3">
            <Link
              href="/contact-us"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <div className="p-3">
            <Link
              href="/faq"
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default CompanyDropdown;
