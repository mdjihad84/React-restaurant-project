import Hero from "../../Components/Hero";
import ProductSection from "../../Components/ProductSection";
import MenuSection from "../../Components/MenuSection";
import ContactSection from "../../Components/ContactSection";
import ShefSection from "../../Components/ShefSection";
import FromSection from "../../Components/FromSection";
import Testimonials from "../../Components/Testimonials";
import FooterSection from "../../Components/FooterSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductSection/>
      <MenuSection/>
      <ContactSection/>
      <ShefSection/>
      <FromSection/>
      <Testimonials />
      <FooterSection/>
    </div>
  );
};
export default Home;
