import { Button } from "@/components/ui/button";
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
      <p className="mb-2">গ্রামের নাম পরিবর্তন করুন</p>
      <input
        type="text"
        className="border px-3 py-1"
        value={editVillage?.title}
        onChange={(e) =>
          setEditVillage({
            _id: editVillage?._id,
            title: e.target.value,
            unionId: editVillage?.unionId,
          })
        }
      />
      <div className="mt-2 space-x-2 text-right">
        <Button variant="outline" onClick={onClose}>
          বাতিল
        </Button>
        <Button onClick={handleVillageEdit}>সেইভ</Button>
      </div>
    </Modal>
  );
};

export default RenameModal;
