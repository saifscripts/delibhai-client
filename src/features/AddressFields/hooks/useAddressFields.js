import { useEffect, useState } from "react";
import generateAddressFields from "../utils/generateAddressFields";

const useAddressFields = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressFields, setAddressFields] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      setAddressFields(await generateAddressFields(selectedAddress));
      setIsLoading(false);
    })();
  }, [selectedAddress]);

  const handleDivisionChange = (e) => {
    setSelectedAddress({
      division: e.target.value,
      district: undefined,
      upazila: undefined,
      union: undefined,
      ward: undefined,
      village: [],
    });
  };

  const handleDistrictChange = (e) => {
    setSelectedAddress((prevAddress) => ({
      ...prevAddress,
      district: e.target.value,
      upazila: undefined,
      union: undefined,
      ward: undefined,
      village: [],
    }));
  };

  const handleUpazilaChange = (e) => {
    setSelectedAddress((prevAddress) => ({
      ...prevAddress,
      upazila: e.target.value,
      union: undefined,
      ward: undefined,
      village: [],
    }));
  };

  const handleUnionChange = (e) => {
    setSelectedAddress((prevAddress) => ({
      ...prevAddress,
      union: e.target.value,
      ward: 'all',
      village: [],
    }));
  };

  const handleWardChange = (e) => {
    setSelectedAddress((prevAddress) => ({
      ...prevAddress,
      ward: e.target.value,
    }));
  };

  const handleVillageSelect = (e) => {
    setSelectedAddress((prevAddress) => ({
      ...prevAddress,
      village: e.target.value,
    }));
  };

  const handleVillageCheck = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    setSelectedAddress((prevAddress) => {
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

  return { selectedAddress, addressFields, setAddressFields , handlers, isLoading };
};

export default useAddressFields;
