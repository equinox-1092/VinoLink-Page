import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { DarkLight } from "./components/dark-light";
import { Services } from "./components/Services";
import { AboutUs } from "./components/About-us";
import { Plans } from "./components/plans";
import { Faq } from "./components/faq";
import { Contact } from "./components/contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-3 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold whitespace-nowrap">
                Vino <span className="text-blue-600">Link</span>
              </span>
            </div>
            <Navbar />
            <DarkLight />
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <section id="home" className="py-24 scroll-mt-20">
          <Hero />
        </section>
        
        <section id="about" className="py-24 scroll-mt-20">
          <div className="container mx-auto px-4">
            <AboutUs />
          </div>
        </section>
        
        <section id="services" className="py-24 scroll-mt-20">
          <div className="container mx-auto px-4">
            <Services />
          </div>
        </section>
        
        <section id="plans" className="py-24 scroll-mt-20">
          <div className="container mx-auto px-4">
            <Plans />
          </div>
        </section>
        
        <section id="faq" className="py-24 scroll-mt-20">
          <div className="container mx-auto px-4">
            <Faq />
          </div>
        </section>
        
        <section id="contact" className="py-24 scroll-mt-20">
          <div className="container mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>
      
      <footer className="py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} VinoLink. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
