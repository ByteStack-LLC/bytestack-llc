import ThemeToggle from "../ui/theme-toggle";
import NavBarLogo from "./NavBarLogo";
import NavBarSites from "./NavBarSites";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-around py-5 px-20 border-b border-gray-700 bg-gray-800">
      <NavBarLogo />
      <ThemeToggle />
      <NavBarSites />
    </nav>
  );
};

export default NavBar;
