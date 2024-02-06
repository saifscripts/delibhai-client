import { getAllDivision } from "bd-divisions-to-unions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import { useAuth } from "../../../contexts/AuthContext";
import PageContainer from "../../../layouts/PageContainer";
import Title from "../../../layouts/Title";
import TopPanel from "../../../layouts/TopPanel";
import getSelectedAddress from "../utils/getSelectedAddress";
import restoreAddressState from "../utils/restoreAddressState";
import { Address } from "./Address";

const defaultAddressValue = {
  division: getAllDivision(),
  district: null,
  upazila: null,
  union: null,
};

const EditManualLocationInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [manualLocation, setManualLocation] = useState(defaultAddressValue);

  const { currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    const manualLocation = currentUser?.manualLocation;
    manualLocation && setManualLocation(restoreAddressState(manualLocation));
  }, [currentUser]);

  const { updateData } = useUpdateData();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const userData = {
      manualLocation: getSelectedAddress(manualLocation),
      // Should add manualLocation.station = 'stationName'
    };

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
      <TopPanel />
      <Title
        title="ম্যানুয়াল লোকেশন"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />
      <PageContainer>
        <form onSubmit={handleSubmit} className="mb-5">
          <Address address={manualLocation} setAddress={setManualLocation} />

          {/* Should add station here or inside Address component */}

          <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
        </form>
      </PageContainer>
    </>
  );
};

export { EditManualLocationInfo };
