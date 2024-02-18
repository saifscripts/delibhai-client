/* eslint-disable react/prop-types */
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const InfoCategory = ({
  type,
  setActiveCategory,
  text,
  icon,
  percent,
  active,
}) => {
  return (
    <div
      onClick={() => setActiveCategory(type)}
      className={`relative z-10 flex flex-col flex-shrink-0 justify-center items-center w-24 p-1 ${
        active && "border-b-2"
      } border-secondary`}
    >
      <div className="relative">
        <CircularProgressbar
          counterClockwise
          className="w-[50px] aspect-square"
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
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full -z-10 flex justify-center items-center text-[#00E1A9] aspect-square`}
          style={{ width: 45 }}
        >
          <img src={icon} alt={text} />
        </div>
      </div>

      <p className="mt-1 text-[6px">{text}</p>
      <p className="text-[#979797] -mt-2 text-[6px">{percent}%</p>
    </div>
  );
};
