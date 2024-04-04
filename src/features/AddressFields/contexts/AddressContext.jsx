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
    setAddress({
      division: {
        _id: e.target.value,
        title: e.target.selectedOptions[0].innerText,
      },
      district: undefined,
      upazila: undefined,
      union: undefined,
      village: [],
    });
  };

  const handleDistrictChange = (e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      district: {
        _id: e.target.value,
        title: e.target.selectedOptions[0].innerText,
      },
      upazila: undefined,
      union: undefined,
      village: [],
    }));
  };

  const handleUpazilaChange = (e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      upazila: {
        _id: e.target.value,
        title: e.target.selectedOptions[0].innerText,
      },
      union: undefined,
      village: [],
    }));
  };

  const handleUnionChange = (e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      union: {
        _id: e.target.value,
        title: e.target.selectedOptions[0].innerText,
      },
      village: [],
    }));
  };

  const handleWardChange = (e) => setWard(e.target.value);

  const handleVillageSelect = (e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      village: {
        _id: e.target.value,
        title: e.target.selectedOptions[0].innerText,
      },
    }));
  };

  const handleVillageCheck = (e) => {
    const value = {
      _id: e.target.value,
      title: e.target.labels[0].innerText.trim(),
    };

    const checked = e.target.checked;

    setAddress((prevAddress) => {
      let _villages = [...prevAddress.village];

      if (checked) {
        _villages.push(value);
      } else {
        _villages = _villages.filter((v) => v._id !== value._id);
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
