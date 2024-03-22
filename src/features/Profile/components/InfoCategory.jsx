import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const InfoCategory = ({
  name,
  setActiveCategory,
  title,
  icon,
  percent,
  active,
}) => {
  return (
    <div
      onClick={() => setActiveCategory(name)}
      className={`relative z-10 flex w-24 flex-shrink-0 flex-col items-center justify-center p-1 ${
        active && "border-b-2"
      } border-secondary`}
    >
      <div className="relative">
        <CircularProgressbar
          counterClockwise
          className="aspect-square w-[50px]"
          strokeWidth={10}
          value={percent}
          styles={{
            path: {
              stroke: "#00E1A9",
              strokeLinecap: "butt",
              transition: "stroke-dashoffset 0.5s ease 0s",
            },
            trail: {
              stroke: "#8a8a8a",
              strokeLinecap: "butt",
            },
          }}
        />

        <div
          className={`absolute left-1/2 top-1/2 -z-10 flex aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-[#00E1A9]`}
          style={{ width: 45 }}
        >
          <img src={icon} alt={title} />
        </div>
      </div>

      <p className="text-[6px mt-1">{title}</p>
      <p className="text-[6px -mt-2 text-[#979797]">{percent}%</p>
    </div>
  );
};
