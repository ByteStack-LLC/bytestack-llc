import Image from "next/image";
import Link from "next/link";

const NavBarLogo = () => {
  return (
    <Link
      href="/"
      className="opacity-90 text-3x1 transition-all  duration-300 hover:scale-110 hover:opacity-100"
    >
      <Image
        className="hover:invert"
        src="/file.svg"
        alt="temporary logo"
        width={30}
        height={30}
      />
    </Link>
  );
};

export default NavBarLogo;
