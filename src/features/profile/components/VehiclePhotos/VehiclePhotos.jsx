import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import camera from "../../../../assets/icons/camera.svg";
import { useAuth } from "../../../../hooks/auth.hook";
import { useUser } from "../../../../hooks/profile.hook";
import { useUpdateRiderMutation } from "../../../../redux/features/user copy/riderApi";
import VehiclePhoto from "./VehiclePhoto";

export default function VehiclePhotos() {
  const [isLoading, setIsLoading] = useState(false);
  const [updateRider] = useUpdateRiderMutation();
  const { id } = useParams();
  const { user: authUser } = useAuth();
  const { data: userData } = useUser(id);
  const user = userData?.data;

  const handleSubmit = async (event) => {
    setIsLoading(true);

    // clone vehicle photo from the state
    let _vehiclePhotos = [];
    if (authUser?.vehiclePhotos) {
      _vehiclePhotos = [...authUser.vehiclePhotos];
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
    const result = await updateRider({
      vehiclePhotos: [..._vehiclePhotos, response.data.data.url],
    });

    // update current user state if database is updated
    if (result?.data?.success) {
      // invalidate ['user', 'me'] query
      //   dispatch(
      //     setUser({
      //       user: result?.data?.data,
      //     }),
      //   );
    }

    setIsLoading(false);
  };

  return (
    <div className="mb-6 overflow-y-hidden">
      <div className="-mb-5 flex gap-2 overflow-x-scroll pb-5">
        {user?.vehiclePhotos?.map((url, index) => (
          <VehiclePhoto url={url} key={url} index={index} userId={user?._id} />
        ))}
        {(!authUser?.vehiclePhotos || user?.vehiclePhotos?.length < 4) &&
          user?._id === authUser?._id && (
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
