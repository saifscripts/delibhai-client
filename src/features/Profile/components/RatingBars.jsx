import englishToBengaliNumber from "../../../utils/englishToBengaliNumber";

export const RatingBars = ({ percentages }) => {
  return (
    <div className="flex flex-col">
      {percentages.map((percentage, i) => {
        console.log(percentage);
        return (
          <div key={i} className="flex gap-3 items-center">
            <span className="text-xl">{englishToBengaliNumber(-i + 5)}</span>
            <div className="w-full h-[9px] rounded-full bg-light">
              <div
                style={{
                  width: `${percentage}%`,
                }}
                className="h-full rounded-full bg-primary"
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
