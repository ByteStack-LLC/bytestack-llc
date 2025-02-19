import NavBar from "./components/navbar/NavBar";
import ByteStack from "./components/ByteStack";

export default function Home() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white dark:bg-gray-700 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <NavBar />
        <ByteStack />
      </main>
    </div>
  );
}
