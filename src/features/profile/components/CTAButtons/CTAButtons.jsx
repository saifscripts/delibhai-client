import { useContext, useEffect, useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../../components/ui/PrimaryButton";
import { updateData } from "../../../../lib/api/api";
import cn from "../../../../lib/cn";
import { useAuth } from "../../../Authentication/contexts/AuthContext";
import UserContext from "../../contexts/UserContext";

export default function CTAButtons() {
  const { userInfo } = useContext(UserContext);
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
    <div className="container fixed bottom-0 left-0 right-0 z-50 flex w-full max-w-3xl items-center justify-center bg-white pb-10 pt-2 sm:pb-2">
      {userInfo?._id !== currentUser?._id && (
        <div className="grid w-full grid-cols-2 gap-3">
          <Link onClick={(e) => e.stopPropagation()}>
            <PrimaryButton className="w-full" icon={<PiPaperPlaneTiltFill />} />
          </Link>

          <Link
            to={`tel:${userInfo?.mobile}`}
            onClick={(e) => e.stopPropagation()}
          >
            <PrimaryButton className="w-full" icon={<BsTelephoneFill />} />
          </Link>
        </div>
      )}

      {userInfo?._id === currentUser?._id && (
        <div>
          <div className="flex items-center justify-center gap-1 rounded-3xl p-2 shadow-lg">
            <button
              onClick={() => handleServiceStatus("off")}
              className={cn("rounded-3xl border border-primary px-3 py-1", {
                "border-red-400 bg-red-400 shadow-md": serviceStatus === "off",
              })}
            >
              অফ
            </button>
            <button
              onClick={() => handleServiceStatus("scheduled")}
              className={cn("rounded-3xl border border-primary px-3 py-1", {
                "border-yellow-500 bg-yellow-500 shadow-md":
                  serviceStatus === "scheduled",
              })}
            >
              শিডিউল টাইম
            </button>
            <button
              onClick={() => handleServiceStatus("on")}
              className={cn("rounded-3xl border border-primary px-3 py-1", {
                "border-secondary bg-secondary shadow-md":
                  serviceStatus === "on",
              })}
            >
              অন
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
