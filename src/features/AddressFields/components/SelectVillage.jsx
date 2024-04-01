import { useAddress } from "../contexts/AddressContext";
import SelectWard from "./SelectWard";

export default function SelectVillage() {
  const { ward, address, addressFields, isLoading, handlers } = useAddress();

  return (
    <div className="mb-1 mt-4">
      <div className="grid grid-cols-[1fr_125px] items-center">
        <label className="font-bold">গ্রাম/স্ট্যাশন</label>
        <SelectWard />
      </div>
      <select
        name="village"
        value={address?.village}
        disabled={isLoading}
        className="w-full border-b border-primary bg-transparent py-3"
        onChange={handlers.handleVillageSelect}
      >
        <option>সিলেক্ট করুন</option>
        {addressFields?.villages
          ?.filter(({ wardId }) => !ward || ward === wardId)
          ?.map(({ _id, title }) => (
            <option key={_id} value={_id}>
              {title}
            </option>
          ))}
      </select>
    </div>
  );
}
