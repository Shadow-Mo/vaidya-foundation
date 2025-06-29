import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contributors from "@/components/Contributors";
import FeaturedCampaigns from "@/components/FeaturedCampaigns";
import Impact from "@/components/Impact";
import DonateCTA from "@/components/DonateCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Contributors />
        <FeaturedCampaigns />
        <Impact />
        <DonateCTA />
      </main>
      <Footer />
    </div>
  );
}
