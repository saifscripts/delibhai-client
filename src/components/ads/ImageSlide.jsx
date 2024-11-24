import { Link } from "react-router-dom";

export default function ImageSlide({ slide }) {
  return (
    <Link
      to={slide.href}
      className="block aspect-[7/2] w-full overflow-hidden rounded-md"
    >
      <img
        src={slide.imageURL}
        loading="lazy"
        className="h-full w-full object-cover object-center"
      />
    </Link>
  );
}
