import AddVillage from "./AddVillage";
import CheckVillages from "./CheckVillages";
import SelectField from "./SelectField";
import SelectVillage from "./SelectVillage";

const AddressFields = ({
  addressFields,
  disabled,
  className,
  villageType,
  selectedAddress,
  setAddressFields,
  handlers,
}) => {
  return (
    <div className={className}>
      <SelectField
        label="বিভাগ"
        name="division"
        defaultValue={selectedAddress?.division}
        disabled={disabled}
        onChange={handlers.handleDivisionChange}
        fields={addressFields?.divisions}
      />
      <SelectField
        label="জেলা"
        name="district"
        defaultValue={selectedAddress?.district}
        disabled={disabled}
        onChange={handlers.handleDistrictChange}
        fields={addressFields?.districts}
      />
      <SelectField
        label="উপজেলা/সিটি কর্পোরেশন"
        name="upazila"
        defaultValue={selectedAddress?.upazila}
        disabled={disabled}
        onChange={handlers.handleUpazilaChange}
        fields={addressFields?.upazilas}
      />
      <SelectField
        label="ইউনিয়ন/থানা/পৌরসভা"
        name="union"
        defaultValue={selectedAddress?.union}
        disabled={disabled}
        onChange={handlers.handleUnionChange}
        fields={addressFields?.unions}
      />
      {villageType === "select" && (
        <SelectVillage
          selectedAddress={selectedAddress}
          disabled={disabled}
          addressFields={addressFields}
          handlers={handlers}
        />
      )}
      {villageType === "checkbox" && (
        <CheckVillages
          selectedAddress={selectedAddress}
          disabled={disabled}
          addressFields={addressFields}
          handlers={handlers}
        />
      )}

      {villageType === "add" && (
        <AddVillage
          selectedAddress={selectedAddress}
          disabled={disabled}
          addressFields={addressFields}
          handlers={handlers}
          setAddressFields={setAddressFields}
        />
      )}
    </div>
  );
};

export default AddressFields;
