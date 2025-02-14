import { Popover } from "@headlessui/react";
import HamburgerDropdown from "./header_components/HamburgerDropdown";
import HeaderNavigation from "./header_components/HeaderNavigation";
import HeaderLogo from "./header_components/HeaderLogo";

export default function Header() {
  return (
    <Popover
      className={
        "container mx-auto flex items-center border-b-2 px-6 py-2 h-16"
      }
    >
      <HeaderLogo />
      <HeaderNavigation />
      <HamburgerDropdown />
    </Popover>
  );
}
