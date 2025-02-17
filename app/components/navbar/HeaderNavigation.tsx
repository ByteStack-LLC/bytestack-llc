import Link from "next/link";

const HeaderNavigation = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-around py-5 px-24 border-b border-gray-700 bg-black">
      <Link href="/about" id="text">
        Services
      </Link>
      <Link href="/contact-us" id="text">
        Company
      </Link>
    </nav>
  );
};

export default HeaderNavigation;
