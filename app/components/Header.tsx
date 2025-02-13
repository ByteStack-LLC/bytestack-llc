import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div
      className={
        "container mx-auto flex items-center border-b-2 px-6 py-2 h-24"
      }
    >
      <div className="flex items-center justify-start gap-2 md:gap-5">
        <Image
          className="dark:invert"
          src="/file.svg"
          alt="temporary logo"
          width={40}
          height={20}
        />
        <Link href="home">
          <h1 className="font-bold">ByteStack</h1>
        </Link>
      </div>
      <div className="grow ">
        <div className="flex items-center justify-end gap-2 md:gap-44">
          <Link href="about">About</Link>
          <Link href="services">Services</Link>
          <Link href="contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
