/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import generateAddressFields from "../utils/generateAddressFields";

const AddressContext = createContext();

export const useAddress = () => {
  return useContext(AddressContext);
};

export const AddressProvider = ({
  address,
  setAddress,
  villageType,
  children,
}) => {
  const [addressFields, setAddressFields] = useState(null);
  const [ward, setWard] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      setAddressFields(await generateAddressFields(address));
      setIsLoading(false);
    })();
  }, [address]);

  const handleDivisionChange = (e) => {
    const selectedDivision = e.target.value
      ? {
          _id: e.target.value,
          title: e.target.selectedOptions[0].innerText,
        }
      : undefined;

    if (!selectedDivision) return setAddress(undefined);

    setAddress({
      division: selectedDivision,
      district: undefined,
      upazila: undefined,
      union: undefined,
      village: undefined,
    });
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value
      ? {
          _id: e.target.value,
          title: e.target.selectedOptions[0].innerText,
        }
      : undefined;

    setAddress((prevAddress) => ({
      ...prevAddress,
      district: selectedDistrict,
      upazila: undefined,
      union: undefined,
      village: undefined,
    }));
  };

  const handleUpazilaChange = (e) => {
    const selectedUpazila = e.target.value
      ? {
          _id: e.target.value,
          title: e.target.selectedOptions[0].innerText,
        }
      : undefined;

    setAddress((prevAddress) => ({
      ...prevAddress,
      upazila: selectedUpazila,
      union: undefined,
      village: undefined,
    }));
  };

  const handleUnionChange = (e) => {
    const selectedUnion = e.target.value
      ? {
          _id: e.target.value,
          title: e.target.selectedOptions[0].innerText,
        }
      : undefined;

    setAddress((prevAddress) => ({
      ...prevAddress,
      union: selectedUnion,
      village: undefined,
    }));
  };

  const handleWardChange = (e) => setWard(e.target.value);

  const handleVillageSelect = (e) => {
    const selectedVillage = e.target.value
      ? {
          _id: e.target.value,
          title: e.target.selectedOptions[0].innerText,
        }
      : undefined;

    setAddress((prevAddress) => ({
      ...prevAddress,
      village: selectedVillage,
    }));
  };

  const handleVillageCheck = (e) => {
    const selectedVillage = e.target.value
      ? {
          _id: e.target.value,
          title: e.target.labels[0].innerText.trim(),
        }
      : undefined;

    const checked = e.target.checked;

    setAddress((prevAddress) => {
      let _villages = Array.isArray(prevAddress.village)
        ? [...prevAddress.village]
        : [];

      if (checked) {
        _villages.push(selectedVillage);
      } else {
        _villages = _villages.filter((v) => v._id !== selectedVillage._id);
      }

      return {
        ...prevAddress,
        village: _villages,
      };
    });
  };

  const handlers = {
    handleVillageCheck,
    handleDivisionChange,
    handleDistrictChange,
    handleUpazilaChange,
    handleUnionChange,
    handleWardChange,
    handleVillageSelect,
  };

  return (
    <AddressContext.Provider
      value={{
        isLoading,
        villageType,
        address,
        ward,
        addressFields,
        setAddressFields,
        handlers,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
