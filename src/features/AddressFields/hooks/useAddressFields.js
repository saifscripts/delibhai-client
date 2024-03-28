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
          ? undefined
          : prevAddress.village,
    }));
  };

  return [selectedAddress, addressFields, handleChange];
};

export default useAddressFields;
