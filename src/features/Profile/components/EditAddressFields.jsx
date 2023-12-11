import * as _ from "lodash";
import { getDistricts, getUnions, getUpazilas } from "../utils/getAddress";

const EditAddressFields = ({ address, setAddress, isLoading }) => {
  const handleChange = (e, currentField) => {
    const currentValue = e.target.value;
    const _address = _.cloneDeep(address);

    // Make current value selected to show the selected value on UI
    _address[currentField] = _address[currentField].map((fieldValue) => {
      if (fieldValue.title === currentValue) {
        fieldValue.selected = true;
      } else {
        fieldValue.selected = false;
      }

      return fieldValue;
    });

    // Update other lower level fields
    switch (currentField) {
      case "division":
        _address.district = getDistricts(currentValue);
        _address.upazila = null;
        _address.union = null;
        break;

      case "district":
        _address.upazila = getUpazilas(currentValue);
        _address.union = null;
        break;

      case "upazila":
        _address.union = getUnions(currentValue);
        break;
    }

    setAddress(_address);
  };
  return (
    <div>
      <div className="mt-4 mb-1">
        <label className="font-bold">বিভাগ</label>
        <select
          disabled={isLoading}
          value={address.division?.find(({ selected }) => selected)?.title}
          className="w-full py-3 border-b border-primary bg-transparent"
          onChange={(e) => handleChange(e, "division")}
        >
          <option>সিলেক্ট করুন</option>
          {address.division?.map(({ title }) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 mb-1">
        <label className="font-bold">জেলা</label>
        <select
          value={address.district?.find(({ selected }) => selected)?.title}
          disabled={isLoading}
          className="w-full py-3 border-b border-primary bg-transparent"
          onChange={(e) => handleChange(e, "district")}
        >
          <option>সিলেক্ট করুন</option>
          {address.district?.map(({ title }) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 mb-1">
        <label className="font-bold">উপজেলা</label>
        <select
          value={address.upazila?.find(({ selected }) => selected)?.title}
          disabled={isLoading}
          className="w-full py-3 border-b border-primary bg-transparent"
          onChange={(e) => handleChange(e, "upazila")}
        >
          <option>সিলেক্ট করুন</option>
          {address.upazila?.map(({ title }) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 mb-1">
        <label className="font-bold">ইউনিয়ন</label>
        <select
          value={address.union?.find(({ selected }) => selected)?.title}
          disabled={isLoading}
          className="w-full py-3 border-b border-primary bg-transparent"
          onChange={(e) => handleChange(e, "union")}
        >
          <option>সিলেক্ট করুন</option>
          {address.union?.map(({ title }) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default EditAddressFields;
