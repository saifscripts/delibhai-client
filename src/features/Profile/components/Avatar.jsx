import dp from "../../../assets/default.jpg";

export const Avatar = ({ className, src }) => {
  return (
    <div className={`aspect-square overflow-hidden rounded-2xl ${className}`}>
      <img src={src || dp} alt="name" className="w-full rounded-xl" />
    </div>
  );
};
