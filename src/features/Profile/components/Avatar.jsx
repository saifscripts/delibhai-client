import camera from "../assets/icons/camera.svg";

export const Avatar = ({ className, image, handleEdit }) => {
  const EditIcon = () => (
    <button
      onClick={handleEdit}
      className="absolute right-[5%] bottom-[5%] rounded-full bg-neutral w-[20%] aspect-square flex justify-center items-center"
    >
      <img src={camera} alt="Camera" />
    </button>
  );

  return (
    <div
      className={`rounded-2xl aspect-square overflow-hidden relative ${className}`}
    >
      <img src={image} alt="name" className="w-full rounded-xl" />
      {handleEdit && <EditIcon />}
    </div>
  );
};
