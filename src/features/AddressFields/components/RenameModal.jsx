import Modal from "../../../layouts/Modal";

const RenameModal = ({
  isOpen,
  onClose,
  handleVillageEdit,
  editVillage,
  setEditVillage,
}) => {
  return (
    <Modal isOpen={isOpen} className="p-4">
      <p className="mb-2 text-accent">গ্রামের নাম পরিবর্তন করুন</p>
      <input
        type="text"
        className="border px-3 py-1"
        value={editVillage?.title}
        onChange={(e) =>
          setEditVillage({ _id: editVillage?._id, title: e.target.value })
        }
      />
      <div className="mt-2 space-x-2 text-right">
        <button className="w-14 rounded-md border px-2 py-1" onClick={onClose}>
          বাতিল
        </button>
        <button
          onClick={handleVillageEdit}
          className="w-14 rounded-md border bg-secondary py-1"
        >
          সেইভ
        </button>
      </div>
    </Modal>
  );
};

export default RenameModal;
