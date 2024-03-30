import Modal from "../../../layouts/Modal";

const DeleteModal = ({ isOpen, onClose, handleVillageDelete, editVillage }) => {
  return (
    <Modal isOpen={isOpen} className="min-w p-4">
      <p className="mb-2 text-accent">আপনি কি এই গ্রামটি ডিলিট করতে চান?</p>
      <p className="font-bold">{editVillage?.title}</p>
      <div className="mt-2 space-x-2 text-right">
        <button
          onClick={handleVillageDelete}
          className="w-14 rounded-md border bg-neutral py-1"
        >
          হ্যাঁ
        </button>
        <button
          className="w-14 rounded-md border bg-primary px-2 py-1 text-white"
          onClick={onClose}
        >
          না
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
