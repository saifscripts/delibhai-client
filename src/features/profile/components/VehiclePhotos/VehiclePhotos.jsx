import axios from "axios";
import { useContext, useState } from "react";
import { useUpdateData } from "../../../../api/api";
import camera from "../../../../assets/icons/camera.svg";
import { useAuth } from "../../../../features/Authentication/contexts/AuthContext";
import UserContext from "../../contexts/UserContext";
import VehiclePhoto from "./VehiclePhoto";

export default function VehiclePhotos() {
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo } = useContext(UserContext);
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
      formData,
    );

    // return if upload is not success
    if (!response?.data?.success) {
      setIsLoading(false);
      return;
    }

    // update the image url in database
    const { data } = await updateData(`/v1/user/${currentUser._id}`, {
      vehiclePhotos: [..._vehiclePhotos, response.data.data.url],
    });

    // update current user state if database is updated
    if (data?.success) {
      setCurrentUser(data.data);
    }

    setIsLoading(false);
  };

  return (
    <div className="mb-6 overflow-y-hidden">
      <div className="-mb-5 flex gap-2 overflow-x-scroll pb-5">
        {userInfo?.vehiclePhotos?.map((url, index) => (
          <VehiclePhoto
            url={url}
            key={url}
            index={index}
            userId={userInfo?._id}
          />
        ))}
        {userInfo?.vehiclePhotos?.length < 4 &&
          userInfo?._id === currentUser?._id && (
            <form
              className={`relative z-10 flex aspect-square w-28 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-accent ${
                isLoading && "opacity-30"
              }`}
            >
              <img src={camera} alt="Camera" />
              <input
                type="file"
                accept="image/*"
                disabled={isLoading}
                className="absolute bottom-0 left-0 right-0 top-0 z-20 opacity-0"
                onChange={handleSubmit}
                onClick={(e) => (e.target.value = null)} // reset value
              />
            </form>
          )}
      </div>
    </div>
  );
}
