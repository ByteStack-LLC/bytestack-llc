import NavBar from "../components/navbar/NavBar";
import "./contact.css";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavBar />
      <main className="justify-center items-center transition-all duration-300">
        {children}
      </main>
    </section>
  );
}
