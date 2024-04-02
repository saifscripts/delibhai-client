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
      division: e.target.value,
      district: undefined,
      upazila: undefined,
      union: undefined,
      ward: undefined,
      village: [],
    });
  };

  const handleDistrictChange = (e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      district: e.target.value,
      upazila: undefined,
      union: undefined,
      ward: undefined,
      village: [],
    }));
  };

  const handleUpazilaChange = (e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      upazila: e.target.value,
      union: undefined,
      ward: undefined,
      village: [],
    }));
  };

  const handleUnionChange = (e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      union: e.target.value,
      ward: "",
      village: [],
    }));
  };

  const handleWardChange = (e) => setWard(e.target.value);

  const handleVillageSelect = (e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      village: e.target.value,
    }));
  };

  const handleVillageCheck = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    setAddress((prevAddress) => {
      let _villages = [...prevAddress.village];

      if (checked) {
        _villages.push(value);
      } else {
        _villages = _villages.filter((v) => v !== value);
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
