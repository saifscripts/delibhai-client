import SelectField from "./SelectField";

const AddressFields = ({
  addressFields,
  handleChange,
  disabled,
  className,
  selectedAddress,
}) => {
  return (
    <div className={className}>
      <SelectField
        label="বিভাগ"
        name="division"
        value={selectedAddress?.division}
        disabled={disabled}
        onChange={handleChange}
        fields={addressFields?.divisions}
      />
      <SelectField
        label="জেলা"
        name="district"
        value={selectedAddress?.district}
        disabled={disabled}
        onChange={handleChange}
        fields={addressFields?.districts}
      />
      <SelectField
        label="উপজেলা"
        name="upazila"
        value={selectedAddress?.upazila}
        disabled={disabled}
        onChange={handleChange}
        fields={addressFields?.upazilas}
      />
      <SelectField
        label="ইউনিয়ন"
        name="union"
        value={selectedAddress?.union}
        disabled={disabled}
        onChange={handleChange}
        fields={addressFields?.unions}
      />

      {/* <div className="mb-1 mt-4">
        <label className="font-bold">ওয়ার্ড</label>
        <select
          name="ward"
          defaultValue={
            addressFields?.wards?.find((field) => field.selected)?.wardCode
          } // find the selected field value
          disabled={disabled}
          onChange={handleChange}
          className="w-full border-b border-primary bg-transparent py-3"
        >
          <option>সিলেক্ট করুন</option>
          {addressFields?.wards?.map(({ wardCode, wardNo }) => (
            <option key={wardCode} value={wardCode}>
              ওয়ার্ড নং {englishToBengaliNumber(wardNo)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-1 mt-4">
        <label className="font-bold">গ্রাম</label>
        <select
          name="village"
          defaultValue={
            addressFields?.villages?.find((field) => field.selected)
              ?.villageCode
          } // find the selected field value
          disabled={disabled}
          onChange={handleChange}
          className="w-full border-b border-primary bg-transparent py-3"
        >
          <option>সিলেক্ট করুন</option>
          {addressFields?.villages?.map(({ villageCode, villageName }) => (
            <option key={villageCode} value={villageCode}>
              {villageName}
            </option>
          ))}
        </select>
      </div> */}
    </div>
  );
};

export default AddressFields;
