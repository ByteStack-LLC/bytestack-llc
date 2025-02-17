import HeaderLogo from "./HeaderLogo";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-around py-5 px-24 border-b border-gray-700 bg-black">
      <HeaderLogo />
    </nav>
  );
};

export default NavBar;
