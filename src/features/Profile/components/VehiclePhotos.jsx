import { useState } from "react";
import camera from "../assets/icons/camera.svg";
import { VehiclePhoto } from "../index";

export const VehiclePhotos = ({ photos = [] }) => {
  const [urls, setUrls] = useState(photos);
  const [deleteBtn, setDeleteBtn] = useState(-1);
  // const [isLoading, setIsLoading] = useState(false);
  // const { updateData } = useUpdateData();
  // const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.dir(event.target);
    // setIsLoading(true);

    // // If user select nid image
    // if (userData.nidURL[0]) {
    //   // Create formData and append the image file
    //   const formData = new FormData();
    //   formData.append("image", userData.nidURL[0]);

    //   // Upload the image to the imagebb
    //   const imgbbResult = await axios.post(
    //     `https://api.imgbb.com/1/upload?key=${
    //       import.meta.env.VITE_IMGBB_API_KEY
    //     }`,
    //     formData
    //   );

    //   // If image upload is not successful, setError message and return
    //   if (!imgbbResult?.data?.success) {
    //     setIsLoading(false);
    //     return setError("general", {
    //       message: imgbbResult.data.error.message || "Something went wrong",
    //     });
    //   }

    //   // If image upload is successful, set the url as nidURL field value
    //   userData.nidURL = imgbbResult.data.data.url;
    // } else {
    //   // If user doesn't select any image to upload, set nidURL = undefined
    //   userData.nidURL = undefined;
    // }

    // // Update data
    // const { data, error } = await updateData(
    //   `/v1/user/${currentUser._id}`,
    //   userData
    // );

    // if (data?.success) {
    //   setCurrentUser(data.data);
    //   return navigate(-1);
    // } else {
    //   setError("general", { message: error?.message });
    // }

    // setIsLoading(false);
    console.log("hello");
  };

  return (
    <div>
      <div className="overflow-y-hidden mb-6">
        <div className="flex gap-2 overflow-x-scroll pb-5 -mb-5">
          {urls.map((url, index) => (
            <VehiclePhoto
              url={url}
              key={index}
              index={index}
              deleteBtn={deleteBtn}
              setDeleteBtn={setDeleteBtn}
              urls={urls}
              setUrls={setUrls}
            />
          ))}
          <form className="relative bg-accent z-10 w-28 aspect-square rounded-lg flex flex-col flex-shrink-0 justify-center items-center">
            <img src={camera} alt="Camera" />
            <input
              type="file"
              accept="image/*"
              className="absolute top-0 bottom-0 right-0 left-0 z-20 opacity-0"
              onChange={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
