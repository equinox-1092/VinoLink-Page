import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { DarkLight } from "./components/dark-light";

export default function Home() {
  return (
    <div>
      <header className="relative flex items-center justify-center animate-fade-in-down animate-duration-1000">
        <Navbar />
        <div className="absolute right-4">
          <DarkLight />
        </div>
      </header>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </div>
  );
}
