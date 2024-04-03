import { useAddress } from "../contexts/AddressContext";
import AddVillage from "./AddVillage";
import CheckVillages from "./CheckVillages";
import SelectField from "./SelectField";
import SelectVillage from "./SelectVillage";

const Fields = ({ className }) => {
  const { villageType, address, addressFields, isLoading, handlers } =
    useAddress();

  return (
    <div className={className}>
      <SelectField
        label="বিভাগ"
        name="division"
        defaultValue={address?.division}
        disabled={isLoading}
        onChange={handlers.handleDivisionChange}
        fields={addressFields?.divisions}
      />
      <SelectField
        label="জেলা"
        name="district"
        defaultValue={address?.district}
        disabled={isLoading}
        onChange={handlers.handleDistrictChange}
        fields={addressFields?.districts}
      />
      <SelectField
        label="উপজেলা/সিটি কর্পোরেশন"
        name="upazila"
        defaultValue={address?.upazila}
        disabled={isLoading}
        onChange={handlers.handleUpazilaChange}
        fields={addressFields?.upazilas}
      />
      <SelectField
        label="ইউনিয়ন/থানা/পৌরসভা"
        name="union"
        defaultValue={address?.union}
        disabled={isLoading}
        onChange={handlers.handleUnionChange}
        fields={addressFields?.unions}
      />
      {villageType === "select" && <SelectVillage />}
      {villageType === "checkbox" && <CheckVillages />}
      {villageType === "add" && <AddVillage />}
    </div>
  );
};

export default Fields;
