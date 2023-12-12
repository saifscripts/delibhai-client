/* eslint-disable react/prop-types */
import { getAllDivision } from "bd-divisions-to-unions";
import { isEqual } from "lodash";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import { useAuth } from "../../../contexts/AuthContext";
import PageContainer from "../../../layouts/PageContainer";
import Title from "../../../layouts/Title";
import TopPanel from "../../../layouts/TopPanel";
import { getDistricts, getUnions, getUpazilas } from "../utils/getAddress";
import { Address } from "./Address";
import { RadioInput } from "./form/RadioInput";

const EditAddressInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAddressEqual, setIsAddressEqual] = useState(true);

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

  useEffect(() => {
    const _presentAddress = currentUser?.presentAddress;
    const _permanentAddress = currentUser?.permanentAddress;

    setIsAddressEqual(isEqual(_presentAddress, _permanentAddress));

    setPresentAddress({
      division: getAllDivision()?.map((division) => {
        if (division.title === _presentAddress?.division) {
          division.selected = true;
        } else {
          division.selected = false;
        }

        return division;
      }),
      district: getDistricts(_presentAddress?.division)?.map((district) => {
        if (district.title === _presentAddress?.district) {
          district.selected = true;
        } else {
          district.selected = false;
        }

        return district;
      }),
      upazila: getUpazilas(_presentAddress?.district)?.map((upazila) => {
        if (upazila.title === _presentAddress?.upazila) {
          upazila.selected = true;
        } else {
          upazila.selected = false;
        }

        return upazila;
      }),
      union: getUnions(_presentAddress?.upazila)?.map((union) => {
        if (union.title === _presentAddress?.union) {
          union.selected = true;
        } else {
          union.selected = false;
        }

        return union;
      }),
    });

    setPermanentAddress({
      division: getAllDivision()?.map((division) => {
        if (division.title === _permanentAddress?.division) {
          division.selected = true;
        } else {
          division.selected = false;
        }

        return division;
      }),
      district: getDistricts(_permanentAddress?.division)?.map((district) => {
        if (district.title === _permanentAddress?.district) {
          district.selected = true;
        } else {
          district.selected = false;
        }

        return district;
      }),
      upazila: getUpazilas(_permanentAddress?.district)?.map((upazila) => {
        if (upazila.title === _permanentAddress?.upazila) {
          upazila.selected = true;
        } else {
          upazila.selected = false;
        }

        return upazila;
      }),
      union: getUnions(_permanentAddress?.upazila)?.map((union) => {
        if (union.title === _permanentAddress?.union) {
          union.selected = true;
        } else {
          union.selected = false;
        }

        return union;
      }),
    });
  }, [currentUser]);

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
      </PageContainer>
    </>
  );
};

export { EditAddressInfo };
