import { Link } from "react-router-dom";

export default function ImageSlide({ slide }) {
  return (
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
  );
}
