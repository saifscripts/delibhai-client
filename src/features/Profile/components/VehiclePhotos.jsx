import axios from "axios";
import { useState } from "react";
import { useUpdateData } from "../../../api/api";
import { useAuth } from "../../../contexts/AuthContext";
import camera from "../assets/icons/camera.svg";
import { VehiclePhoto } from "../index";

export const VehiclePhotos = () => {
  const [deleteBtn, setDeleteBtn] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const { updateData } = useUpdateData();
  const { currentUser, setCurrentUser } = useAuth();

  const handleSubmit = async (event) => {
    setIsLoading(true);

    let _vehiclePhotos = [];
    if (currentUser?.vehiclePhotos) {
      _vehiclePhotos = [...currentUser.vehiclePhotos];
    }

    let files = event.target.files;
    const formData = new FormData();
    formData.append("image", files[0]);

    let response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );

    if (!response?.data?.success) {
      setIsLoading(false);
      return;
    }

    const { data, error } = await updateData(`/v1/user/${currentUser._id}`, {
      vehiclePhotos: [..._vehiclePhotos, response.data.data.url],
    });

    if (data?.success) {
      console.log(data);
      setCurrentUser(data.data);
    } else {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <div className="overflow-y-hidden mb-6">
        <div className="flex gap-2 overflow-x-scroll pb-5 -mb-5">
          {currentUser?.vehiclePhotos?.map((url, index) => (
            <VehiclePhoto
              url={url}
              key={index}
              index={index}
              deleteBtn={deleteBtn}
              setDeleteBtn={setDeleteBtn}
            />
          ))}
          <form className="relative bg-accent z-10 w-28 aspect-square rounded-lg flex flex-col flex-shrink-0 justify-center items-center">
            <img src={camera} alt="Camera" />
            <input
              type="file"
              multiple="multiple"
              accept="image/*"
              disabled={isLoading}
              className="absolute top-0 bottom-0 right-0 left-0 z-20 opacity-0"
              onChange={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
