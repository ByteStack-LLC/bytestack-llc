import Image from "next/image";
import Link from "next/link";

const NavBarLogo = () => {
  return (
    <Link href="/" className="transition duration-300 hover:scale-110">
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
