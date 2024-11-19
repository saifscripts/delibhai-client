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
      <div className="hidden space-y-2 bg-gray-200 sm:block sm:space-y-4">
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
      <div className="space-y-2 bg-gray-200 sm:hidden sm:space-y-4">
        <Carousel />
        <MobileHome />
      </div>
    </>
  );
}
