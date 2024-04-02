import { cloneDeep } from "lodash";
import { AiFillPlusSquare } from "react-icons/ai";
import MiniContainer from "../../../layouts/MiniContainer";
import Modal from "../../../layouts/Modal";
import { AddressFields } from "../../AddressFields";

const AddressModal = ({
  isOpen,
  onClose,
  address,
  setAddress,
  serviceAddress,
  setServiceAddress,
  addressIndex,
}) => {
  const handleSave = (e) => {
    e.preventDefault();
    const _serviceAddress = cloneDeep(serviceAddress);
    _serviceAddress[addressIndex] = address;
    setServiceAddress(_serviceAddress);
    setAddress(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-192 max-w-3xl">
      <MiniContainer>
        <AddressFields
          villageType="checkbox"
          address={address}
          setAddress={setAddress}
        />
        <button
          onClick={handleSave}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-2 py-2 text-xl text-white"
        >
          <AiFillPlusSquare />
          <span>সেইভ</span>
        </button>
      </MiniContainer>
    </Modal>
  );
};

export default AddressModal;
