import { cloneDeep } from "lodash";
import { useEffect } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { AddressFields } from "../../../../features/AddressFields";
import MiniContainer from "../../../../layouts/MiniContainer";
import Modal from "../../../../layouts/Modal";
import { showErrorToast } from "../../../../lib/toast";

export default function AddressModal({
  isOpen,
  onClose,
  address,
  setAddress,
  serviceAddress,
  setServiceAddress,
  addressIndex,
}) {
  useEffect(() => {
    const isUnionExist = serviceAddress?.some(
      (add) => add?.union?._id === address?.union?._id,
    );

    if (addressIndex === serviceAddress.length && isUnionExist) {
      return showErrorToast("ইউনিয়নটি ইতিমধ্যে যোগ করা হয়েছে!");
    }
  }, [address, serviceAddress, addressIndex]);
  const handleSave = (e) => {
    e.preventDefault();

    // const isUnionExist = serviceAddress?.some(
    //   (add) => add?.union?._id === address?.union?._id,
    // );

    // if (addressIndex === serviceAddress.length && isUnionExist) {
    //   return showErrorToast("ইউনিয়নটি ইতিমধ্যে যোগ করা হয়েছে!");
    // }

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
}
