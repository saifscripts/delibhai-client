import { GoCheck } from "react-icons/go";

const Step = ({ step }) => {
  const { id, title, description } = step;

  return (
    <div className="border-accent-75 relative rounded-2xl border px-7 py-8 text-center md:text-left">
      {/* Icon */}
      <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-xl bg-[#f8f8f8] md:mx-0">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-secondary to-primary">
          <GoCheck className="text-3xl text-white" />
        </div>
      </div>

      {/* Title and Description */}
      <h4 className="mb-3 text-base font-semibold">{title}</h4>
      <p className="text-sm text-[#5C5C5C]">{description}</p>

      {/* Arrow */}
      {id !== 3 && (
        <div className="absolute -bottom-10 right-1/2 -mr-4 flex rotate-90 md:-right-10 md:bottom-1/2 md:top-1/2 md:-mt-2 md:rotate-0">
          {/* First */}
          <div className="flex bg-primary opacity-30">
            <div className="border-b-8 border-l-8  border-r-4 border-t-8 border-y-secondary border-l-white border-r-secondary"></div>
            <div className="border-b-8 border-l-8  border-r-4 border-t-8 border-y-white border-l-secondary border-r-white"></div>
          </div>
          {/* Second */}
          <div className="-ml-2 flex bg-primary">
            <div className="border-b-8 border-l-8  border-r-4 border-t-8 border-y-secondary border-l-white border-r-secondary"></div>
            <div className="border-b-8 border-l-8  border-r-4 border-t-8 border-y-white border-l-secondary border-r-white"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step;
