import englishToBengaliNumber from "../../../utils/englishToBengaliNumber";

export const RatingBars = ({ percentages }) => {
  return (
    <div className="flex flex-col">
      {percentages.map((percentage, i) => {
        return (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xl">{englishToBengaliNumber(-i + 5)}</span>
            <div className="bg-light h-[9px] w-full rounded-full">
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
