import { useAddress } from "../contexts/AddressContext";

export default function SelectWard() {
  const { isLoading, address, addressFields, handlers } = useAddress();

  return (
    <select
      name="ward"
      defaultValue={address?.ward}
      disabled={isLoading}
      onChange={handlers.handleWardChange}
      className="w-full rounded-md bg-primary bg-opacity-10 px-4 py-[6px]"
    >
      <option value="all">সকল ওয়ার্ড</option>
      {addressFields?.wards?.map(({ _id, title }) => (
        <option key={_id} value={_id}>
          {title}
        </option>
      ))}
    </select>
  );
}
