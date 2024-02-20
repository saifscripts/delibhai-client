import dp from "../../../assets/default.jpg";

export const Avatar = ({ className, src }) => {
  return (
    <div className={`rounded-2xl aspect-square overflow-hidden ${className}`}>
      <img src={src || dp} alt="name" className="w-full rounded-xl" />
    </div>
  );
};
