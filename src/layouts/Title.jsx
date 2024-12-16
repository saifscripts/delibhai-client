// eslint-disable-next-line react/prop-types
const Title = ({ title, subtitle, color }) => {
  return (
    <div
      className={`text-${color} py-4 text-center ${
        color === "white" ? "" : "border-b border-foreground/30"
      }`}
    >
      <h1 className={`text-2xl font-bold lg:text-4xl`}>{title}</h1>
      <div className="mt-2">{subtitle}</div>
    </div>
  );
};

export default Title;
