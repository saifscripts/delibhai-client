/* eslint-disable react/prop-types */
import { isEqual } from "lodash";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import { AddressFields } from "../../AddressFields";
import { useAuth } from "../../Authentication/contexts/AuthContext";
import getAddressId from "../utils/getAddressId";
import { RadioInput } from "./form/RadioInput";

const EditAddressInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAddressEqual, setIsAddressEqual] = useState(true);
  const [presentAddress, setPresentAddress] = useState(null);
  const [permanentAddress, setPermanentAddress] = useState(null);

  const { currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    const presentAddress = currentUser?.presentAddress;
    const permanentAddress = currentUser?.permanentAddress;

    presentAddress && setPresentAddress(presentAddress);
    permanentAddress && setPermanentAddress(permanentAddress);

    setIsAddressEqual(isEqual(presentAddress, permanentAddress));
  }, [currentUser]);

  const { updateData } = useUpdateData();
  const navigate = useNavigate();

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
    const { data } = await updateData(`/v1/user/${currentUser._id}`, address);

    if (data?.success) {
      setCurrentUser(data.data);
      return navigate(-1);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Title
        title="ঠিকানা"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />
      <MiniContainer>
        <form onSubmit={handleSubmit} className="mb-5">
          <p className="border-light mb-3 mt-4 border-b py-3 font-bold">
            বর্তমান ঠিকানা
          </p>

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
      </MiniContainer>
    </>
  );
};

export { EditAddressInfo };
