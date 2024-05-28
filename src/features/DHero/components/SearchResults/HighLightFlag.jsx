import star from "./star.svg";

export default function HighlightFlag() {
  return (
    <span className="flex animate-bounce items-center rounded-md bg-yellow-100 px-1.5 py-0.5">
      <div>
        <img src={star} alt="" className="w-4/5" />
      </div>
      <span className="text-xs">প্রধান স্ট্যাশন</span>
    </span>
  );
}
