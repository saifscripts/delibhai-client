import { useEffect, useState } from "react";
import { getAllDivision } from "../../../lib/bd-divisions-to-unions";
import restoreAddressState from "../utils/restoreAddressState";

const useAddressFields = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const [addressFields, setAddressFields] = useState({
    divisions: getAllDivision(),
    districts: null,
    upazilas: null,
    unions: null,
  });

  useEffect(() => {
    setAddressFields(restoreAddressState(selectedAddress));
  }, [selectedAddress]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSelectedAddress((prevAddress) => ({
      division: name === "division" ? value : prevAddress.division,
      district:
        name === "district"
          ? value
          : name === "division"
            ? undefined
            : prevAddress.district,
      upazila:
        name === "upazila"
          ? value
          : name === ("division" || "district")
            ? undefined
            : prevAddress.upazila,
      union:
        name === "union"
          ? value
          : name === ("division" || "district" || "upazila")
            ? undefined
            : prevAddress.union,
    }));
  };

  return [selectedAddress, addressFields, handleChange];
};

export default useAddressFields;