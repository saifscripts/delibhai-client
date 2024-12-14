import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import getUserAgent from "../../utils/getUserAgent";
import ImageSlide from "./ImageSlide";
import VideoSlide from "./VideoSlide";

const userAgent = getUserAgent();

const slides = [
  {
    _id: "1",
    type: "image",
    href:
      userAgent === "pc"
        ? "https://www.facebook.com/delibhaiit/"
        : userAgent === "android"
          ? "fb://page/127914237079370"
          : "fb://profile/127914237079370",
    imageURL:
      "https://res.cloudinary.com/dz6h5okzp/image/upload/v1732420072/Rectangle_1179_qnocac.png",
  },
  {
    _id: "2",
    type: "image",
    href:
      userAgent === "pc"
        ? "https://www.facebook.com/delibhaiit/"
        : userAgent === "android"
          ? "fb://page/127914237079370"
          : "fb://profile/127914237079370",
    imageURL:
      "https://res.cloudinary.com/dz6h5okzp/image/upload/v1732908692/deliBhai_IT_Banner_Banner_gy9xmo.png",
  },
];

export default function Ads() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Keyboard]}
      loop
      keyboard
      watchSlidesProgress
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      style={{
        "--swiper-pagination-color": "#00C795",
        "--swiper-pagination-bottom": "0px",
      }}
      className="bg-background"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide._id} className="p-2 pb-6">
          {slide.type === "image" ? (
            <ImageSlide slide={slide} />
          ) : (
            ({ isVisible }) => isVisible && <VideoSlide slide={slide} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
