import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <div className="flex items-center justify-start gap-2 md:gap-5">
      <Image
        className="dark:invert"
        src="/file.svg"
        alt="temporary logo"
        width={40}
        height={20}
      />
      <Link href="/">
        <h1 className="font-bold" style={{ fontSize: "1.6rem" }}>
          ByteStack
        </h1>
      </Link>
    </div>
  );
};

export default HeaderLogo;
