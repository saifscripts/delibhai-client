import CheckVillages from "./CheckVillages";
import SelectField from "./SelectField";

const AddressFields = ({
  addressFields,
  handleChange,
  disabled,
  className,
  selectedAddress,
  handlers,
}) => {
  console.log(selectedAddress);
  return (
    <form className={className}>
      <SelectField
        label="বিভাগ"
        name="division"
        value={selectedAddress?.division}
        disabled={disabled}
        onChange={handlers.handleDivisionChange}
        fields={addressFields?.divisions}
      />
      <SelectField
        label="জেলা"
        name="district"
        value={selectedAddress?.district}
        disabled={disabled}
        onChange={handlers.handleDistrictChange}
        fields={addressFields?.districts}
      />
      <SelectField
        label="উপজেলা/সিটি কর্পোরেশন"
        name="upazila"
        value={selectedAddress?.upazila}
        disabled={disabled}
        onChange={handlers.handleUpazilaChange}
        fields={addressFields?.upazilas}
      />
      <SelectField
        label="ইউনিয়ন/থানা/পৌরসভা"
        name="union"
        value={selectedAddress?.union}
        disabled={disabled}
        onChange={handlers.handleUnionChange}
        fields={addressFields?.unions}
      />
      {/* <SelectVillage
        selectedAddress={selectedAddress}
        disabled={disabled}
        onChange={handleChange}
        addressFields={addressFields}
      /> */}
      <CheckVillages
        selectedAddress={selectedAddress}
        disabled={disabled}
        onChange={handleChange}
        addressFields={addressFields}
        handlers={handlers}
      />
    </form>
  );
};

export default AddressFields;
