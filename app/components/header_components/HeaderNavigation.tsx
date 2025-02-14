import Link from "next/link";

const HeaderNavigation = () => {
  return (
    <div className="grow ">
      <div className="hidden sm:flex items-center justify-end gap-2 md:gap-20">
        <Link href="about" id="text">
          Services
        </Link>
        <Link href="services" id="text">
          Resources
        </Link>
        <Link href="contact" id="text">
          Company
        </Link>
      </div>
    </div>
  );
};

export default HeaderNavigation;
