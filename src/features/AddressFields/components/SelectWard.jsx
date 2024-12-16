import englishToBengaliNumber from "../../../utils/englishToBengaliNumber";
import { useAddress } from "../contexts/AddressContext";

const wards = Array.from(Array(20)).map((ward, index) => ({
  _id: index + 1,
  title: `ওয়ার্ড নং ${englishToBengaliNumber(index + 1)}`,
}));

export default function SelectWard() {
  const { ward, handlers } = useAddress();
  return (
    <select
      name="ward"
      value={ward}
      onChange={handlers.handleWardChange}
      className="w-full rounded-md bg-primary px-4 py-[6px] text-primary-foreground"
    >
      <option value="">সকল ওয়ার্ড</option>
      {wards?.map(({ _id, title }) => (
        <option key={_id} value={_id}>
          {title}
        </option>
      ))}
    </select>
  );
}
