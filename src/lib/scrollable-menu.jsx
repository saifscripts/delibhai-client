import { useRef, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import cn from "./cn";

export function ScrollableMenu({ children, className, arrow, ...restProps }) {
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);
  const scrollElementRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = scrollElementRef.current.scrollLeft;
    const scrollWidth = scrollElementRef.current.scrollWidth;
    const clientWidth = scrollElementRef.current.clientWidth;

    if (scrollPosition === 0) {
      setLeftArrow(false);
    } else {
      setLeftArrow(true);
    }

    if (scrollWidth * 0.999 < scrollPosition + clientWidth) {
      setRightArrow(false);
    } else {
      setRightArrow(true);
    }
  };

  const handleLeftScroll = () => {
    scrollElementRef.current.scrollLeft -=
      scrollElementRef.current.clientWidth * 0.8;
  };

  const handleRightScroll = () => {
    scrollElementRef.current.scrollLeft +=
      scrollElementRef.current.clientWidth * 0.8;
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className={cn(
          "flex gap-4 overflow-x-scroll py-3 -mb-4 scroll-smooth",
          className
        )}
        onScroll={handleScroll}
        ref={scrollElementRef}
        {...restProps}
      >
        {children}
      </div>
      {arrow && leftArrow && <LeftArrow onClick={handleLeftScroll} />}
      {arrow && rightArrow && <RightArrow onClick={handleRightScroll} />}
    </div>
  );
}

export function Item({ children, className, ...restProps }) {
  return (
    <div className={cn("flex-shrink-0", className)} {...restProps}>
      {children}
    </div>
  );
}

function LeftArrow(props) {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 left-0 text-3xl hover:shadow-sm w-6 p-1"
      {...props}
    >
      <MdArrowBackIos />
    </div>
  );
}
function RightArrow(props) {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 right-1 text-3xl hover:shadow-sm w-6 p-1"
      {...props}
    >
      <MdArrowForwardIos />
    </div>
  );
}
