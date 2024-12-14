import { Button } from "@/components/ui/button";
import isEqual from "lodash/isEqual";
import { useEffect, useState } from "react";
import { AddressFields } from "../../../../features/AddressFields";
import { useMe } from "../../../../hooks/auth.hook";
import { useUpdateRider } from "../../../../hooks/user.hook";
import Modal from "../../../../layouts/Modal";
import RadioInput from "./RadioInput";

export default function EditAddressInfo({ isOpen, onClose }) {
  const [isAddressEqual, setIsAddressEqual] = useState(true);
  const [presentAddress, setPresentAddress] = useState(null);
  const [permanentAddress, setPermanentAddress] = useState(null);
  const { user } = useMe();
  const {
    mutate: updateRider,
    data: updatedRider,
    isPending,
    isSuccess,
  } = useUpdateRider();

  useEffect(() => {
    const presentAddress = user?.presentAddress;
    const permanentAddress = user?.permanentAddress;

    presentAddress && setPresentAddress(presentAddress);
    permanentAddress && setPermanentAddress(permanentAddress);

    setIsAddressEqual(isEqual(presentAddress, permanentAddress));
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const address = {
      presentAddress,
      permanentAddress,
    };

    if (isAddressEqual) {
      address.permanentAddress = address.presentAddress;
    }

    // Update data
    updateRider(address);
  };

  useEffect(() => {
    if (isSuccess && updatedRider?.success) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, updatedRider]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeBtn headerText="ঠিকানা">
      <form onSubmit={handleSubmit} className="w-[512px] max-w-full">
        <p className="border-light mb-3 border-b font-bold">বর্তমান ঠিকানা</p>

        <AddressFields
          address={presentAddress}
          setAddress={setPresentAddress}
          villageType="select"
        />

        <p className="border-light mb-3 mt-4 border-b py-3 font-bold">
          স্থায়ী ঠিকানা
        </p>

        <RadioInput
          label="বর্তমান ও স্থায়ী ঠিকানা একই"
          checked={isAddressEqual}
          onClick={() => setIsAddressEqual(true)}
        />

        <RadioInput
          label="বর্তমান ও স্থায়ী ঠিকানা একই নয়"
          checked={!isAddressEqual}
          onClick={() => setIsAddressEqual(false)}
        />

        {!isAddressEqual && (
          <AddressFields
            address={permanentAddress}
            setAddress={setPermanentAddress}
            villageType="select"
          />
        )}
        <Button disabled={isPending} type="submit" className="mt-4 w-full">
          সংরক্ষণ করুন
        </Button>
      </form>
    </Modal>
  );
}
