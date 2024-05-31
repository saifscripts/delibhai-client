import { useContext } from "react";
import vehicles from "../../../../data/vehicles";
import UserContext from "../../contexts/UserContext";
import ProfileAvatar from "./ProfileAvatar";

export default function ProfileHeader() {
  const { userInfo } = useContext(UserContext);

  const vehicleIcon = vehicles.find(
    ({ title }) => title === userInfo?.vehicleType,
  )?.icon;

  return (
    <>
      <div className="flex items-center gap-5">
        <ProfileAvatar avatarURL={userInfo?.avatarURL} />

        <div>
          <h3 className="mb-1 text-2xl">{userInfo?.name}</h3>

          <span className="border-grey-500 mb-4 inline-block rounded-lg border px-3 font-inter text-gray-500">
            #{userInfo?._id?.slice(0, 5)}
          </span>

          <div className="relative z-10 flex h-10 items-center rounded-full bg-gradient-to-b from-[#6BFFDA] to-[#00E1A9] py-3 pl-4 pr-10 text-xs min-[500px]:text-base">
            <span>
              {userInfo?.vehicleType && userInfo?.vehicleType + " রাইডার"}
            </span>
            <div className="absolute right-0 top-1/2 h-16 w-16 -translate-y-1/2 translate-x-1/2">
              <img
                src={vehicleIcon}
                alt={userInfo?.vehicleType}
                className="mx-auto h-full"
              />
            </div>
            <div className="absolute right-0 top-1/2 -z-20 aspect-square w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-secondary p-4 opacity-10"></div>
            <div className="absolute right-0 top-1/2 -z-10 aspect-square w-[76px] -translate-y-1/2 translate-x-1/2 rounded-full bg-secondary opacity-20"></div>
          </div>
        </div>
      </div>
    </>
  );
}
