/* eslint-disable react/prop-types */
import { getAllDivision } from "bd-divisions-to-unions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import { useAuth } from "../../../contexts/AuthContext";
import PageContainer from "../../../layouts/PageContainer";
import Title from "../../../layouts/Title";
import TopPanel from "../../../layouts/TopPanel";
import Address from "./Address";
import { RadioInput } from "./form/RadioInput";

const EditAddressInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPermanentAddress, setShowPermanentAddress] = useState(false);

  const [presentAddress, setPresentAddress] = useState({
    division: getAllDivision(),
    district: null,
    upazila: null,
    union: null,
  });

  const [permanentAddress, setPermanentAddress] = useState({
    division: getAllDivision(),
    district: null,
    upazila: null,
    union: null,
  });

  const { currentUser, setCurrentUser } = useAuth();
  const { updateData } = useUpdateData();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const address = {
      presentAddress: {},
      permanentAddress: {},
    };

    // Get selected field values
    for (const field in presentAddress) {
      address.presentAddress[field] = presentAddress[field]?.find(
        ({ selected }) => selected
      )?.title;

      address.permanentAddress[field] = permanentAddress[field]?.find(
        ({ selected }) => selected
      )?.title;
    }

    if (!showPermanentAddress) {
      address.permanentAddress = address.presentAddress;
    }

    console.log(address);
    // Update data
    const { data } = await updateData(`/v1/user/${currentUser._id}`, address);

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
        title="ঠিকানা"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />
      <PageContainer>
        <form onSubmit={handleSubmit} className="mb-5">
          <p className="font-bold mt-4 mb-3 py-3 border-b border-light">
            বর্তমান ঠিকানা
          </p>

          <Address address={presentAddress} setAddress={setPresentAddress} />

          <p className="font-bold mt-4 mb-3 py-3 border-b border-light">
            স্থায়ী ঠিকানা
          </p>

          <RadioInput
            label="বর্তমান ও স্থায়ী ঠিকানা একই"
            checked={!showPermanentAddress}
            onClick={() => setShowPermanentAddress(false)}
          />
          <RadioInput
            label="বর্তমান ও স্থায়ী ঠিকানা একই নয়"
            checked={showPermanentAddress}
            onClick={() => setShowPermanentAddress(true)}
          />

          {showPermanentAddress && (
            <Address
              address={permanentAddress}
              setAddress={setPermanentAddress}
            />
          )}

          <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
        </form>
      </PageContainer>
    </>
  );
};

export { EditAddressInfo };
