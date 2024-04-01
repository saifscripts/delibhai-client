import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import { AddressFields } from "../../AddressFields";
import { useAuth } from "../../Authentication/contexts/AuthContext";
import getAddressId from "../utils/getAddressId";

const EditManualLocationInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [manualLocation, setManualLocation] = useState(null);

  const { currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    const manualLocation = currentUser?.manualLocation;
    console.log(manualLocation);

    manualLocation && setManualLocation(getAddressId(manualLocation));
  }, [currentUser]);

  const { updateData } = useUpdateData();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const userData = { manualLocation };

    // Update data
    const { data } = await updateData(`/v1/user/${currentUser._id}`, userData);

    if (data?.success) {
      setCurrentUser(data.data);
      return navigate(-1);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Title
        title="ম্যানুয়াল লোকেশন"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />
      <MiniContainer>
        <form onSubmit={handleSubmit} className="mb-5">
          <AddressFields
            villageType="select"
            address={manualLocation}
            setAddress={setManualLocation}
          />

          {/* Should add station here or inside Address component */}

          <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
        </form>
      </MiniContainer>
    </>
  );
};

export { EditManualLocationInfo };
