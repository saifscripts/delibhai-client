import { useEffect, useState } from "react";
import { updateData } from "../../../../lib/api/api";
import { useAuth } from "../../../Authentication/contexts/AuthContext";
import offDisabled from "./assets/off-disabled.svg";
import off from "./assets/off.svg";
import onDisabled from "./assets/on-disabled.svg";
import on from "./assets/on.svg";
import scheduledDisabled from "./assets/scheduled-disabled.svg";
import scheduled from "./assets/scheduled.svg";

export default function ServiceStatusButtons() {
  const { currentUser, setCurrentUser } = useAuth();
  const [serviceStatus, setServiceStatus] = useState("scheduled");

  useEffect(() => {
    setServiceStatus(currentUser?.serviceStatus || "scheduled");
  }, [currentUser]);

  const handleServiceStatus = async (status) => {
    setServiceStatus(status);

    const response = await updateData(`/v1/user/${currentUser._id}`, {
      serviceStatus: status,
    });

    if (response?.success) {
      setCurrentUser(response.data);
      setServiceStatus(response.data?.serviceStatus);
    } else {
      setServiceStatus(currentUser?.serviceStatus || "scheduled");
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
