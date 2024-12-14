import { Button } from "@/components/ui/button";
import Modal from "../../../layouts/Modal";

const DeleteModal = ({ isOpen, onClose, handleVillageDelete, editVillage }) => {
  return (
    <Modal isOpen={isOpen} className="min-w p-4">
      <p className="mb-2">আপনি কি এই গ্রামটি ডিলিট করতে চান?</p>
      <p className="font-bold">{editVillage?.title}</p>
      <div className="mt-2 space-x-2 text-right">
        <Button variant="outline" onClick={onClose}>
          না
        </Button>

        <Button onClick={handleVillageDelete} variant="destructive">
          হ্যাঁ
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
