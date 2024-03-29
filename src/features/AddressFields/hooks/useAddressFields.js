import { useEffect, useState } from "react";
import generateAddressFields from "../utils/generateAddressFields";

const useAddressFields = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressFields, setAddressFields] = useState(null);

  useEffect(() => {
    (async function () {
      setAddressFields(await generateAddressFields(selectedAddress));
    })();
  }, [selectedAddress]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const isDivision = name === "division";
    const isDistrict = name === "district";
    const isUpazila = name === "upazila";
    const isUnion = name === "union";
    const isWard = name === "ward";
    const isVillage = name === "village";

    setSelectedAddress((prevAddress) => ({
      division: isDivision ? value : prevAddress.division,
      district: isDistrict
        ? value
        : isDivision
          ? undefined
          : prevAddress.district,
      upazila: isUpazila
        ? value
        : isDivision || isDistrict
          ? undefined
          : prevAddress.upazila,
      union: isUnion
        ? value
        : isDivision || isDistrict || isUpazila
          ? undefined
          : prevAddress.union,
      ward: isWard
        ? value
        : isDivision || isDistrict || isUpazila || isUnion
          ? undefined
          : prevAddress.ward,
      village: isVillage
        ? value
        : isDivision || isDistrict || isUpazila || isUnion || isWard
          ? []
          : prevAddress.village,
    }));
  };

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
      ward: undefined,
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

  return { selectedAddress, addressFields, handleChange, handlers };
};

export default useAddressFields;
