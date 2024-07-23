import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../../../lib/api/api";
import {
  getAuthUser,
  setUser,
} from "../../../../redux/features/auth/authSlice";
import offDisabled from "./assets/off-disabled.svg";
import off from "./assets/off.svg";
import onDisabled from "./assets/on-disabled.svg";
import on from "./assets/on.svg";
import scheduledDisabled from "./assets/scheduled-disabled.svg";
import scheduled from "./assets/scheduled.svg";

export default function ServiceStatusButtons() {
  const [serviceStatus, setServiceStatus] = useState("scheduled");
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);

  useEffect(() => {
    setServiceStatus(user?.serviceStatus || "scheduled");
  }, [user]);

  const handleServiceStatus = async (status) => {
    setServiceStatus(status);

    const response = await updateData(`/v1/user/${user._id}`, {
      serviceStatus: status,
    });

    if (response?.success) {
      dispatch(
        setUser({
          user: response.data,
        }),
      );
      //   setServiceStatus(response.data?.serviceStatus);
    } else {
      setServiceStatus(user?.serviceStatus || "scheduled");
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 rounded-3xl px-3 py-1 shadow-2xl">
      <div
        className="w-16 cursor-pointer"
        onClick={() => handleServiceStatus("off")}
      >
        <img
          src={serviceStatus === "off" ? off : offDisabled}
          alt=""
          className="w-full"
        />
      </div>
      <div
        className="w-16 cursor-pointer"
        onClick={() => handleServiceStatus("scheduled")}
      >
        <img
          src={serviceStatus === "scheduled" ? scheduled : scheduledDisabled}
          alt=""
          className="w-full"
        />
      </div>
      <div
        className="w-16 cursor-pointer"
        onClick={() => handleServiceStatus("on")}
      >
        <img
          src={serviceStatus === "on" ? on : onDisabled}
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
}
