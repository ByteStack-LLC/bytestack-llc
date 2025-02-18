import Link from "next/link";
import { Popover, PopoverButton } from "@headlessui/react";

const ServicesDropdown = () => {
  return (
    <div className="text-sm/6 font-semibold text-white/50">
      <Popover>
        <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white transition duration-300 hover:scale-110">
          <Link href="/services">Services</Link>
        </PopoverButton>
      </Popover>
    </div>
  );
};

export default ServicesDropdown;
