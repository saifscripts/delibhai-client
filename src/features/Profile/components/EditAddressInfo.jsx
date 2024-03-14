/* eslint-disable react/prop-types */
import { getAllDivision } from "bd-divisions-to-unions";
import { isEqual } from "lodash";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import { useAuth } from "../../../contexts/AuthContext";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import getSelectedAddress from "../utils/getSelectedAddress";
import restoreAddressState from "../utils/restoreAddressState";
import { Address } from "./Address";
import { RadioInput } from "./form/RadioInput";

const defaultAddressValue = {
  division: getAllDivision(),
  district: null,
  upazila: null,
  union: null,
};

const EditAddressInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAddressEqual, setIsAddressEqual] = useState(true);
  const [presentAddress, setPresentAddress] = useState(defaultAddressValue);
  const [permanentAddress, setPermanentAddress] = useState(defaultAddressValue);

  const { currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    const presentAddress = currentUser?.presentAddress;
    const permanentAddress = currentUser?.permanentAddress;

    presentAddress && setPresentAddress(restoreAddressState(presentAddress));
    permanentAddress &&
      setPermanentAddress(restoreAddressState(permanentAddress));

    setIsAddressEqual(isEqual(presentAddress, permanentAddress));
  }, [currentUser]);

  const { updateData } = useUpdateData();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const address = {
      presentAddress: getSelectedAddress(presentAddress),
      permanentAddress: getSelectedAddress(permanentAddress),
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
          <p className="font-bold mt-4 mb-3 py-3 border-b border-light">
            বর্তমান ঠিকানা
          </p>

          <Address address={presentAddress} setAddress={setPresentAddress} />

          <p className="font-bold mt-4 mb-3 py-3 border-b border-light">
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
            <Address
              address={permanentAddress}
              setAddress={setPermanentAddress}
            />
          )}

          <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
        </form>
      </MiniContainer>
    </>
  );
};

export { EditAddressInfo };
