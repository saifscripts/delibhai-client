import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import cn from "./cn";

export function ScrollableMenu({ children, className, arrow, ...restProps }) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={cn("flex gap-4 overflow-x-scroll py-3 -mb-4", className)}
        {...restProps}
      >
        {children}
      </div>
      {arrow && (
        <>
          <LeftArrow />
          <RightArrow />
        </>
      )}
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

function LeftArrow() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-0 text-3xl hover:shadow-sm w-6 p-1">
      <MdArrowBackIos />
    </div>
  );
}
function RightArrow() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-0 text-3xl hover:shadow-sm w-6 p-1">
      <MdArrowForwardIos />
    </div>
  );
}
