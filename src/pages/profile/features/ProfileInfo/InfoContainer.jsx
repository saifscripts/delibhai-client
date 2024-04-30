import { useState } from "react";
import Edit from "../../../../components/ui/Edit";
import {
  EditAddress,
  EditContactInfo,
  EditManualLocation,
  EditOwnerInfo,
  EditPersonalInfo,
  EditServiceInfo,
  EditVehicleInfo,
  EditVideoURL,
} from "../EditProfile";

export default function InfoContainer({ category, children, editModal }) {
  const [modal, setModal] = useState("");

  const openModal = (modalName) => {
    setModal(modalName);
  };

  const closeModal = () => {
    setModal("");
  };
  return (
    <div className="mb-3">
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-xl font-bold">{category}</h4>
        {editModal && <Edit onClick={() => openModal(editModal)} />}
      </div>

      {children}

      <EditPersonalInfo isOpen={modal === "personal"} onClose={closeModal} />
      <EditContactInfo isOpen={modal === "contact"} onClose={closeModal} />
      <EditAddress isOpen={modal === "address"} onClose={closeModal} />
      <EditVehicleInfo isOpen={modal === "vehicle"} onClose={closeModal} />
      <EditManualLocation
        isOpen={modal === "manual-location"}
        onClose={closeModal}
      />
      <EditServiceInfo isOpen={modal === "service"} onClose={closeModal} />
      <EditVideoURL isOpen={modal === "video"} onClose={closeModal} />
      <EditOwnerInfo isOpen={modal === "owner"} onClose={closeModal} />
    </div>
  );
}
