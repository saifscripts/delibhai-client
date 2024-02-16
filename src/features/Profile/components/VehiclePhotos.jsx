import axios from "axios";
import { useState } from "react";
import { useUpdateData } from "../../../api/api";
import { useAuth } from "../../../contexts/AuthContext";
import camera from "../assets/icons/camera.svg";
import { InfoContainer, VehiclePhoto } from "../index";

export const VehiclePhotos = ({ userInfo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { updateData } = useUpdateData();
  const { currentUser, setCurrentUser } = useAuth();

  const handleSubmit = async (event) => {
    setIsLoading(true);

    // clone vehicle photo from the state
    let _vehiclePhotos = [];
    if (currentUser?.vehiclePhotos) {
      _vehiclePhotos = [...currentUser.vehiclePhotos];
    }

    // create formData from the image
    let files = event.target.files;
    const formData = new FormData();
    formData.append("image", files[0]);

    // upload image to the imgbb
    let response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );

    // return if upload is not success
    if (!response?.data?.success) {
      setIsLoading(false);
      return;
    }

    // update the image url in database
    const { data, error } = await updateData(`/v1/user/${currentUser._id}`, {
      vehiclePhotos: [..._vehiclePhotos, response.data.data.url],
    });

    // update current user state if database is updated
    if (data?.success) {
      setCurrentUser(data.data);
    } else {
      console.log(error);
    }

    setIsLoading(false);
  };

  const vehiclePhotos = currentUser?.vehiclePhotos || userInfo?.vehiclePhotos;

  return (
    <InfoContainer type="গাড়ির ছবি">
      <div className="overflow-y-hidden mb-6">
        <div className="flex gap-2 overflow-x-scroll pb-5 -mb-5">
          {vehiclePhotos?.map((url, index) => (
            <VehiclePhoto url={url} key={url} index={index} />
          ))}
          {vehiclePhotos?.length < 4 && (
            <form
              className={`relative bg-accent z-10 w-28 aspect-square rounded-lg flex flex-col flex-shrink-0 justify-center items-center ${
                isLoading && "opacity-30"
              }`}
            >
              <img src={camera} alt="Camera" />
              <input
                type="file"
                accept="image/*"
                disabled={isLoading}
                className="absolute top-0 bottom-0 right-0 left-0 z-20 opacity-0"
                onChange={handleSubmit}
                onClick={(e) => (e.target.value = null)} // reset value
              />
            </form>
          )}
        </div>
      </div>
    </InfoContainer>
  );
};
