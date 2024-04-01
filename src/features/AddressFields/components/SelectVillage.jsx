import SelectWard from "./SelectWard";

export default function SelectVillage({
  disabled,
  addressFields,
  selectedAddress,
  handlers,
}) {
  return (
    <div className="mb-1 mt-4">
      <div className="grid grid-cols-[1fr_125px] items-center">
        <label className="font-bold">গ্রাম/স্ট্যাশন</label>
        <SelectWard
          disabled={disabled}
          fields={addressFields?.wards}
          defaultValue={selectedAddress?.ward}
          handlers={handlers}
        />
      </div>
      <select
        name="village"
        defaultValue={selectedAddress?.village}
        disabled={disabled}
        className="w-full border-b border-primary bg-transparent py-3"
      >
        <option>সিলেক্ট করুন</option>
        {addressFields?.villages
          ?.filter(
            ({ wardId }) =>
              selectedAddress?.ward === "all" ||
              selectedAddress?.ward === wardId,
          )
          ?.map(({ _id, title }) => (
            <option key={_id} value={_id}>
              {title}
            </option>
          ))}
      </select>
    </div>
  );
}
