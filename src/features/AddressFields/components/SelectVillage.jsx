import SelectWard from "./SelectWard";

export default function SelectVillage({
  disabled,
  addressFields,
  onChange,
  selectedAddress,
}) {
  return (
    <div className="mb-1 mt-4">
      <div className="grid grid-cols-[1fr_125px] items-center">
        <label className="font-bold">গ্রাম/স্ট্যাশন</label>
        <SelectWard
          disabled={disabled}
          fields={addressFields?.wards}
          onChange={onChange}
          defaultValue={selectedAddress?.ward}
        />
      </div>
      <select
        name="village"
        defaultValue={selectedAddress?.village}
        disabled={disabled}
        onChange={onChange}
        className="w-full border-b border-primary bg-transparent py-3"
      >
        <option>সিলেক্ট করুন</option>
        {addressFields?.villages?.map(({ _id, title }) => (
          <option key={_id} value={_id}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
}
