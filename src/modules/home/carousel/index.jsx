import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
      }}
      className="bg-white"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide._id} className="p-2 pb-10 sm:p-4 sm:pb-10">
          {slide.type === "image" ? (
            <Link
              to={slide.href}
              className="block aspect-[2/1] max-h-[calc(100svh-120px)] w-full overflow-hidden rounded-xl"
            >
              <img
                src={slide.imageURL}
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            </Link>
          ) : (
            ({ isVisible }) =>
              isVisible && (
                <ReactPlayer
                  controls
                  //   playing
                  width="100%"
                  height="100%"
                  //   light="https://swiperjs.com/demos/images/nature-3.jpg"
                  loop
                  url="https://www.youtube.com/shorts/_HgpFMdZ16c"
                  className="block aspect-[2/1] max-h-[calc(100svh-120px)] w-full overflow-hidden rounded-xl"
                />
              )
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
