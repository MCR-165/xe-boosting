import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="text-white">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
    </main>
  );
}
