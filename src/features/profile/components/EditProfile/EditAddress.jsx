import { isEqual } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateData } from "../../../../api/api";
import Button from "../../../../components/ui/Button";
import { AddressFields } from "../../../../features/AddressFields";
import Modal from "../../../../layouts/Modal";
import {
  getAuthUser,
  setUser,
} from "../../../../redux/features/auth/authSlice";
import getAddressId from "../../utils/getAddressId";
import RadioInput from "./RadioInput";

export default function EditAddressInfo({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isAddressEqual, setIsAddressEqual] = useState(true);
  const [presentAddress, setPresentAddress] = useState(null);
  const [permanentAddress, setPermanentAddress] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);

  useEffect(() => {
    const presentAddress = user?.presentAddress;
    const permanentAddress = user?.permanentAddress;

    presentAddress && setPresentAddress(presentAddress);
    permanentAddress && setPermanentAddress(permanentAddress);

    setIsAddressEqual(isEqual(presentAddress, permanentAddress));
  }, [user]);

  const { updateData } = useUpdateData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const address = {
      presentAddress: getAddressId(presentAddress),
      permanentAddress: getAddressId(permanentAddress),
    };

    if (isAddressEqual) {
      address.permanentAddress = address.presentAddress;
    }

    // Update data
    const { data } = await updateData(`/v1/user/${user._id}`, address);

    if (data?.success) {
      dispatch(
        setUser({
          user: data.data,
        }),
      );
      onClose();
    }

    setIsLoading(false);
  };

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

        <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
      </form>
    </Modal>
  );
}
