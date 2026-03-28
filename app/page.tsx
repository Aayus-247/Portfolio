import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills"; // IMPORTANT
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />   {/* 👈 YEH ADD KARNA HAI */}
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}