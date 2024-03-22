// eslint-disable-next-line react/prop-types
export default function SearchOption({ text, fill, handleSelectSearchOption }) {
  return (
    <div
      className="my-4 flex items-center gap-4 hover:cursor-default"
      onClick={handleSelectSearchOption}
    >
      <div
        className={`aspect-square w-5 rounded-full border border-gray-500 ${
          fill && "border-primary bg-primary"
        }`}
      ></div>
      <div className="text-md font-inter">{text}</div>
    </div>
  );
}
