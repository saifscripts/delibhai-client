import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useUpdateData } from "../../../api/api";
import { useAuth } from "../../../contexts/AuthContext";

export const VehiclePhoto = ({ url, index }) => {
  const { currentUser, setCurrentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { updateData } = useUpdateData();
  const [deleteBtn, setDeleteBtn] = useState(-1);

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
    setIsLoading(true);

    const _currentUser = cloneDeep(currentUser);
    const _vehiclePhotos = _currentUser?.vehiclePhotos || [];
    _vehiclePhotos.splice(index, 1);

    const { data, error } = await updateData(`/v1/user/${currentUser._id}`, {
      vehiclePhotos: _vehiclePhotos,
    });

    if (data?.success) {
      setCurrentUser(data.data);
    } else {
      console.log(error);
    }

    setIsLoading(false);
  };

  const showDeleteBtn = (e) => {
    e.stopPropagation();

    setDeleteBtn(index);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
      }}
      className={`relative flex flex-col flex-shrink-0 justify-center items-center w-28 aspect-square p-1 bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden ${
        isLoading && "opacity-30"
      }`}
    >
      <BsThreeDotsVertical
        className="absolute right-0 top-0"
        onClick={showDeleteBtn}
      />
      <button
        onClick={removePhoto}
        className={`absolute right-4 top-0 bg-white px-3 py-1 rounded-lg ${
          deleteBtn === index ? "flex" : "hidden"
        } gap-3 items-center shadow-lg`}
      >
        <span className="text-sm">ডিলিট</span>
        <span className="p-1 rounded-full bg-neutral">{<AiFillDelete />}</span>
      </button>
    </div>
  );
};
