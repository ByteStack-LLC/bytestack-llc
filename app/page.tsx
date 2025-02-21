import NavBar from "./components/navbar/NavBar";
import ByteStack from "./components/ByteStack";
import Tech from "./components/Tech";
import Team from "./components/Team";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <NavBar />
        <ByteStack />
        <Tech />
        <Team />
        <Contact />
      </main>
    </>
  );
}
