import { useEffect, useState } from "react";
import { useUpdateData } from "../../../../api/api";
import Button from "../../../../components/ui/Button";
import { AddressFields } from "../../../../features/AddressFields";
import { useAuth } from "../../../../features/Authentication/contexts/AuthContext";
import Modal from "../../../../layouts/Modal";
import getAddressId from "../../../utils/getAddressId";

export default function EditManualLocation({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [manualLocation, setManualLocation] = useState(null);

  const { currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    const manualLocation = currentUser?.manualLocation;

    manualLocation && setManualLocation(manualLocation);
  }, [currentUser]);

  const { updateData } = useUpdateData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const userData = { manualLocation: getAddressId(manualLocation) };

    // Update data
    const { data } = await updateData(`/v1/user/${currentUser._id}`, userData);

    if (data?.success) {
      setCurrentUser(data.data);
      onClose();
    }

    setIsLoading(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeBtn
      headerText="ম্যানুয়াল লোকেশন"
    >
      <form onSubmit={handleSubmit} className="w-[512px] max-w-full">
        <AddressFields
          villageType="select"
          address={manualLocation}
          setAddress={setManualLocation}
        />

        {/* Should add station here or inside Address component */}

        <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
      </form>
    </Modal>
  );
}
