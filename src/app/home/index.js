import Footer from "./footer";
import HeroSection from "./hero";
import MissionSection from "./mission";
import OurProduct from "./product";
import WhyUs from "./why-us";

export default function Home() {
    return (
    <>
      <HeroSection />
      <MissionSection />
      <WhyUs />
      <OurProduct/>
      <Footer/>
    </>
    );
  }