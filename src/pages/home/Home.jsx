import { DeliveryBanner } from "../../features/DeliveryBanner";
import { EarningsBanner } from "../../features/EarningsBanner";
import { FeaturedServices } from "../../features/FeaturedServices";
import { Footer } from "../../features/Footer";
import { HeroSection } from "../../features/HeroSection";
import { MobileHome } from "../../features/MobileHome/";
import { OrderProcess } from "../../features/OrderProcess";
import { Services } from "../../features/Services";
import { Stats } from "../../features/Stats";

const Home = () => {
  return (
    <>
      <div className="hidden sm:block">
        <HeroSection />
        <Services />
        <OrderProcess />
        <FeaturedServices />
        <DeliveryBanner />
        <EarningsBanner />
        <Stats />
        <Footer />
      </div>
      <div className="sm:hidden">
        <MobileHome />
      </div>
    </>
  );
};

export default Home;
