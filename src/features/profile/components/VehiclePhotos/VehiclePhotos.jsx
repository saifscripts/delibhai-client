import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import camera from '../../../../assets/icons/camera.svg';
import { useMe } from '../../../../hooks/auth.hook';
import { useGetUser, useUpdateRider } from '../../../../hooks/user.hook';
import VehiclePhoto from './VehiclePhoto';

export default function VehiclePhotos() {
  const [isLoading, setIsLoading] = useState(false);
  const { mutate: updateRider, isPending } = useUpdateRider();
  const { id } = useParams();
  const { user: authUser } = useMe();
  const { user } = useGetUser(id);

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
    formData.append('image', files[0]);

    let response;

    // upload image to the imgbb
    try {
      response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );
    } catch (error) {
      toast.error('Failed to upload image');
      setIsLoading(false);
    }

    // update the image url in database
    updateRider({
      vehiclePhotos: [..._vehiclePhotos, response.data.data.url],
    });
  };

  useEffect(() => {
    if (!isPending) {
      setIsLoading(false);
    }
  }, [isPending]);

  return (
    <div className="mb-6 overflow-y-hidden">
      <div className="-mb-5 flex gap-2 overflow-x-scroll pb-5">
        {user?.vehiclePhotos?.map((url, index) => (
          <VehiclePhoto url={url} key={url} index={index} userId={user?._id} />
        ))}
        {(!authUser?.vehiclePhotos || user?.vehiclePhotos?.length < 4) &&
          user?._id === authUser?._id && (
            <form
              className={`relative z-10 flex aspect-square w-28 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-muted-foreground ${
                isLoading && 'opacity-30'
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
