import { DeliveryBanner } from "../../features/DeliveryBanner";
import { EarningsBanner } from "../../features/EarningsBanner";
import { FeaturedServices } from "../../features/FeaturedServices";
import { Footer } from "../../features/Footer";
import { HeroSection } from "../../features/HeroSection";
import { OrderProcess } from "../../features/OrderProcess";
import { Services } from "../../features/Services";
import { Stats } from "../../features/Stats";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <OrderProcess />
      <FeaturedServices />
      <DeliveryBanner />
      <EarningsBanner />
      <Stats />
      <Footer />
    </>
  );
};

export default Home;
