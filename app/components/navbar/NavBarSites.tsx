import Link from "next/link";
import { Popover, PopoverButton } from "@headlessui/react";

const NavBarSites = () => {
  return (
    <div className="flex gap-10 text-lg space-x-10">
      <div className="text-sm/6 font-semibold text-white">
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-white focus:outline-none data-[active]:text-white/50 data-[hover]:text-white/50 data-[focus]:outline-1 data-[focus]:outline-white transition duration-300 hover:scale-110">
            <Link href="/about">About Us</Link>
          </PopoverButton>
        </Popover>
      </div>
      <div className="text-sm/6 font-semibold text-white">
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-white focus:outline-none data-[active]:text-white/50 data-[hover]:text-white/50 data-[focus]:outline-1 data-[focus]:outline-white transition duration-300 hover:scale-110">
            <Link href="/about">Contact Us</Link>
          </PopoverButton>
        </Popover>
      </div>
    </div>
  );
};

export default NavBarSites;
