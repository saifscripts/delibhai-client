import { DeliveryBanner } from "../../features/DeliveryBanner";
import { EarningsBanner } from "../../features/EarningsBanner";
import { FeaturedServices } from "../../features/FeaturedServices";
import { Footer } from "../../features/Footer";
import { MobileHome } from "../../features/MobileHome/";
import { OrderProcess } from "../../features/OrderProcess";
import { Services } from "../../features/Services";
import { Stats } from "../../features/Stats";
import Carousel from "../../modules/home/carousel";

export default function Home() {
  return (
    <>
      <div className="hidden sm:block">
        <Carousel />
        {/* <Hero /> */}
        <Services />
        <OrderProcess />
        <FeaturedServices />
        <DeliveryBanner />
        <EarningsBanner />
        <Stats />
        <Footer />
      </div>
      <div className="sm:hidden">
        <Carousel />
        <MobileHome />
      </div>
    </>
  );
}
