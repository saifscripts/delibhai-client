import cloneDeep from "lodash/cloneDeep";
import { useEffect, useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { AddressFields } from "../../../../features/AddressFields";
import MiniContainer from "../../../../layouts/MiniContainer";
import Modal from "../../../../layouts/Modal";
import isAddressExist from "../../utils/isAddressExist";

export default function AddressModal({
  isOpen,
  onClose,
  address,
  setAddress,
  serviceAddress,
  setServiceAddress,
  addressIndex,
}) {
  const [error, setError] = useState("");
  //   useEffect(() => {
  //     const isUnionExist = serviceAddress?.some(
  //       (adr) => adr?.union?._id === address?.union?._id,
  //     );

  //     if (addressIndex === serviceAddress.length && isUnionExist) {
  //       return toast.error("ইউনিয়নটি ইতিমধ্যে যোগ করা হয়েছে!");
  //     }
  //   }, [address, serviceAddress, addressIndex]);
  useEffect(() => {
    setError("");
  }, [address]);

  const handleSave = (e) => {
    e.preventDefault();
    setError("");

    if (
      addressIndex === serviceAddress.length &&
      isAddressExist(address, serviceAddress)
    ) {
      return setError("ঠিকানাটি ইতিমধ্যে যোগ করা হয়েছে!");
    }

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

        <p className="mb-3 text-center text-red-400">{error}</p>
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
