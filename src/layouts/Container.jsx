import cn from "../lib/cn";

const Container = ({ children, className }) => {
  return <div className={cn("container", className)}>{children}</div>;
};

export default Container;
