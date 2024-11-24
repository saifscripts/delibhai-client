import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ImageSlide from "./ImageSlide";
import VideoSlide from "./VideoSlide";

const slides = [
  {
    _id: "1",
    type: "image",
    href: "/vehicles",
    imageURL:
      "https://res.cloudinary.com/dz6h5okzp/image/upload/v1732405986/724-04_ej0thn.webp",
  },
  {
    _id: "2",
    type: "image",
    href: "/blood",
    imageURL:
      "https://res.cloudinary.com/dz6h5okzp/image/upload/v1732406129/724-03_w7knki.webp",
  },
  {
    _id: "3",
    type: "video",
    videoURL: "https://www.youtube.com/watch?v=1M0Hg_DWigA",
    thumbURL:
      "https://res.cloudinary.com/dz6h5okzp/image/upload/v1732413874/deliBhai_IT_Banner-01-01_hldxmy.webp",
  },
];

export default function Carousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Keyboard]}
      loop
      keyboard
      watchSlidesProgress
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      style={{
        "--swiper-pagination-color": "#00C795",
        "--swiper-pagination-bottom": "0px",
      }}
      className="bg-white"
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
