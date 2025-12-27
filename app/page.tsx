import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhyEagleLikes from "./components/WhyEagleLikes";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <div className="text-white">
      <Header />
      <Hero />
      <WhyEagleLikes/>
      <Faq/>
      <Footer />
    </div>
  );
}
