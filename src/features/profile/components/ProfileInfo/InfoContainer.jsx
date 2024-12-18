import { Button } from "@/components/ui/button";
import { useState } from "react";
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
  return children.length > 0 ? (
    <div className="mb-3">
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-xl font-bold">{category}</h4>
        {category === "ব্যক্তিগত তথ্য" ? (
          <EditPersonalInfo />
        ) : category === "কন্টাক্ট ইনফো" ? (
          <EditContactInfo />
        ) : (
          editModal && (
            <Button variant="link" onClick={() => openModal(editModal)}>
              Edit
            </Button>
          )
        )}
      </div>

      {children}

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
  ) : null;
}
