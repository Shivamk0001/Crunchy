import Features from "../../components/home/Features";
import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import BestSellers from "../../components/home/BestSellers";
import Offers from "../../components/home/Offers";
import Testimonials from "../../components/home/Testimonials";
import ReadyToCrunch from "../../components/home/ReadyToCrunch";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* In the sequence seen in your screen recordings */}
        <Hero />
        <Features />
        <Categories />
        <BestSellers />
        <Offers />
        <Testimonials />
        <ReadyToCrunch />

      </main>
    </div>
  );
}