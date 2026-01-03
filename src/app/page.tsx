import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import Categories from "../components/home/Categories";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <main >
        <Hero />
        <Categories />
        <Testimonials />
      </main>
    </div>
  );
}