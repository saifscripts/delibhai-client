import { useState } from "react";
import Edit from "../../../../components/ui/Edit";
import EditPersonalInfo from "../EditProfile/EditPersonalInfo";

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
    </div>
  );
}
