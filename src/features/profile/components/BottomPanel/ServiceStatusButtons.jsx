import { useEffect, useState } from "react";

import { useAuth } from "../../../../hooks/auth.hook";
import { useUpdateRider } from "../../../../hooks/user.hook";
import offDisabled from "./assets/off-disabled.svg";
import off from "./assets/off.svg";
import onDisabled from "./assets/on-disabled.svg";
import on from "./assets/on.svg";
import scheduledDisabled from "./assets/scheduled-disabled.svg";
import scheduled from "./assets/scheduled.svg";

export default function ServiceStatusButtons() {
  const [serviceStatus, setServiceStatus] = useState("scheduled");
  const { mutate: updateRider } = useUpdateRider();
  const { user } = useAuth();

  useEffect(() => {
    setServiceStatus(user?.serviceStatus || "scheduled");
  }, [user]);

  const handleServiceStatus = async (status) => {
    setServiceStatus(status);

    updateRider({
      serviceStatus: status,
    });
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
