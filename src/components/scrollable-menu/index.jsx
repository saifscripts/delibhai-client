import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

export function ScrollMenu({ children, className, arrow, ...restProps }) {
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(false);
  const scrollElementRef = useRef(null);

  useEffect(() => {
    const scrollWidth = scrollElementRef.current.scrollWidth;
    const clientWidth = scrollElementRef.current.clientWidth;
    if (scrollWidth > clientWidth) setRightArrow(true);
    if (scrollWidth <= clientWidth) setRightArrow(false);
  }, [scrollElementRef.current]);

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
    <div className="relative w-full overflow-hidden">
      <div
        className={cn(
          'flex-no-wrap hide-scrollbar flex gap-4 overflow-x-auto scroll-smooth py-3',
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

export function ScrollItem({ children, className, ...restProps }) {
  return (
    <div className={cn('flex-shrink-0', className)} {...restProps}>
      {children}
    </div>
  );
}

function LeftArrow(props) {
  return (
    <div
      className="absolute left-0 top-1/2 flex aspect-square w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary bg-opacity-70 text-xl text-white transition-all duration-300 hover:bg-opacity-100 shadow-lg"
      {...props}
    >
      <MdOutlineArrowBackIos />
    </div>
  );
}

function RightArrow(props) {
  return (
    <div
      className="absolute right-0 top-1/2 flex aspect-square w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary bg-opacity-70 text-xl text-white transition-all duration-300 hover:bg-opacity-100 shadow-lg"
      {...props}
    >
      <MdOutlineArrowForwardIos />
    </div>
  );
}
