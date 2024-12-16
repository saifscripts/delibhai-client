import Ads from "../../../components/ads";
import SocialLinks from "../../../components/social-links";
import Carousel from "../components/carousel";
import Services from "../components/services";

export default function Home() {
  return (
    <div className="space-y-1.5 bg-black sm:space-y-3">
      <Carousel />
      <Services />
      <Ads />
      <SocialLinks />
    </div>
  );
}
