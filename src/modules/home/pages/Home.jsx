import Ads from '../../../components/ads';
import SocialLinks from '../../../components/social-links';
import Carousel from '../components/carousel';
import Services from '../components/services';

export default function Home() {
  return (
    <div className="space-y-1.5 sm:space-y-3 bg-muted dark:bg-black">
      <Carousel />
      <Services />
      <Ads />
      <SocialLinks />
    </div>
  );
}
