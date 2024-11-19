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
    href: "https://trello.com/b/iLZukXnv/delibhai-web-app",
    imageURL: "https://swiperjs.com/demos/images/nature-1.jpg",
  },
  {
    _id: "2",
    type: "image",
    href: "https://trello.com/b/iLZukXnv/delibhai-web-app",
    imageURL: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
  {
    _id: "3",
    type: "image",
    href: "https://trello.com/b/iLZukXnv/delibhai-web-app",
    imageURL: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
  {
    _id: "4",
    type: "video",
    videoURL: "https://www.youtube.com/shorts/_HgpFMdZ16c",
    thumbURL: "https://swiperjs.com/demos/images/nature-3.jpg",
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
        "--swiper-pagination-bottom": "4px",
      }}
      className="bg-white"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide._id} className="p-2 pb-8">
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
