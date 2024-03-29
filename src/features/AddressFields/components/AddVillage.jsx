import { cloneDeep } from "lodash";
import { useState } from "react";
import { postData } from "../../../lib/api/api";
import cn from "./../../../lib/cn";
import SelectWard from "./SelectWard";

export default function AddVillage({
  disabled,
  addressFields,
  setAddressFields,
  selectedAddress,
  handlers,
}) {
  const [villages, setVillages] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const villageArray = villages.split(",").map((village) => ({
      unionValue: selectedAddress.union,
      wardValue: selectedAddress.ward,
      title: village.trim(),
    }));

    const response = await postData("/v1/village/create", villageArray);

    if (response?.success) {
      const _addressFields = cloneDeep(addressFields);
      _addressFields.villages.unshift(...response.data);
      setAddressFields(_addressFields);
      setVillages("");
    }
    setLoading(false);
  };

  return (
    <div className="mb-1 mt-4">
      <div className="grid grid-cols-[1fr_125px] items-center">
        <label className="font-bold">গ্রাম/স্ট্যাশন</label>
        <SelectWard
          disabled={disabled}
          fields={addressFields?.wards}
          onChange={handlers.handleWardChange}
          value={selectedAddress?.ward}
        />
      </div>

      {selectedAddress?.ward !== "all" && (
        <div className="my-5 grid grid-cols-[1fr_200px] items-center gap-3">
          <input
            onChange={(e) => setVillages(e.target.value)}
            value={villages}
            type="text"
            className="h-12 w-full rounded-md border p-2"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            disabled={loading}
            className={cn("h-12 rounded-md bg-secondary", {
              "bg-accent text-neutral": loading,
            })}
          >
            Add Villages
          </button>
        </div>
      )}

      <div className="h-80 overflow-auto">
        {addressFields?.villages
          ?.filter(
            ({ wardValue }) =>
              selectedAddress?.ward === "all" ||
              selectedAddress?.ward === wardValue,
          )
          .map(({ value, title }) => (
            <p key={value} className="my-1 block text-xl">
              {title}
            </p>
          ))}
      </div>
    </div>
  );
}
