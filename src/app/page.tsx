import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { DarkLight } from "./components/dark-light";
import { Services } from "./components/Services";
import { AboutUs } from "./components/About-us";

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
        <AboutUs />
        <Services />
      </main>
      <footer></footer>
    </div>
  );
}
