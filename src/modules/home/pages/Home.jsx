import Ads from "../../../components/ads";
import SocialLinks from "../../../components/social-links";
import { DeliveryBanner } from "../../../features/DeliveryBanner";
import { EarningsBanner } from "../../../features/EarningsBanner";
import { FeaturedServices } from "../../../features/FeaturedServices";
import { Footer } from "../../../features/Footer";
import { OrderProcess } from "../../../features/OrderProcess";
import { Stats } from "../../../features/Stats";
import Carousel from "../components/carousel";
import Services from "../components/services";

export default function Home() {
  return (
    <div className="space-y-1.5 bg-gray-200 sm:space-y-3">
      <Carousel />
      <Services />
      <Ads />
      <OrderProcess />
      <FeaturedServices />
      <DeliveryBanner />
      <EarningsBanner />
      <Stats />
      <SocialLinks />
      <Footer />
    </div>
  );
}
