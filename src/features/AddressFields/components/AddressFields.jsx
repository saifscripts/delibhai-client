import SelectField from "./SelectField";

const AddressFields = ({ addressFields, handleChange, disabled }) => {
  return (
    <>
      <SelectField
        label="বিভাগ"
        name="division"
        disabled={disabled}
        onChange={handleChange}
        fields={addressFields?.divisions}
      />
      <SelectField
        label="জেলা"
        name="district"
        disabled={disabled}
        onChange={handleChange}
        fields={addressFields?.districts}
      />
      <SelectField
        label="উপজেলা"
        name="upazila"
        disabled={disabled}
        onChange={handleChange}
        fields={addressFields?.upazilas}
      />
      <SelectField
        label="ইউনিয়ন"
        name="union"
        disabled={disabled}
        onChange={handleChange}
        fields={addressFields?.unions}
      />
    </>
  );
};

export default AddressFields;
