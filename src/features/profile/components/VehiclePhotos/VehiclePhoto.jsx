import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAuth } from "../../../../hooks/auth.hook";
import { useUpdateRider } from "../../../../hooks/user.hook";

export default function VehiclePhoto({ url, index, userId }) {
  const [deleteBtn, setDeleteBtn] = useState(-1);
  const { mutate: updateRider, isPending } = useUpdateRider();
  const { user } = useAuth();

  useEffect(() => {
    const hideDeleteBtn = () => {
      setDeleteBtn(-1);
    };

    window.addEventListener("click", hideDeleteBtn);

    return () => {
      window.removeEventListener("click", hideDeleteBtn);
    };
  }, [setDeleteBtn]);

  const removePhoto = async () => {
    const vehiclePhotos = user?.vehiclePhotos || [];
    const updatedVehiclePhotos = [...vehiclePhotos];
    updatedVehiclePhotos?.splice(index, 1);

    updateRider({
      vehiclePhotos: updatedVehiclePhotos,
    });
  };

  const showDeleteBtn = (e) => {
    e.stopPropagation();
    setDeleteBtn(index);
  };

  const DeleteButton = () => {
    return (
      <button
        onClick={removePhoto}
        className={`absolute right-4 top-0 items-center gap-3 rounded-lg bg-white px-3 py-1 shadow-lg ${
          deleteBtn === index ? "flex" : "hidden"
        }`}
      >
        <span className="text-sm">ডিলিট</span>
        <span className="rounded-full bg-neutral p-1">{<AiFillDelete />}</span>
      </button>
    );
  };

  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
      }}
      className={`relative flex aspect-square w-28 flex-shrink-0 flex-col items-center justify-center overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-1 hover:shadow-xl ${
        isPending && "opacity-30"
      }`}
    >
      <DeleteButton />
      {userId === user?._id && (
        <BsThreeDotsVertical
          className="absolute right-0 top-0"
          onClick={showDeleteBtn}
        />
      )}
    </div>
  );
}
