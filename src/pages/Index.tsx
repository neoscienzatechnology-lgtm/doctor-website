import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Insurance from "@/components/Insurance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Insurance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
