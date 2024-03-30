import { cloneDeep } from "lodash";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteData, postData, updateData } from "../../../lib/api/api";
import generateAddressFields from "../utils/generateAddressFields";
import cn from "./../../../lib/cn";
import DeleteModal from "./DeleteModal";
import RenameModal from "./RenameModal";
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
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editVillage, setEditVillage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const villageArray = villages.split(",").map((village) => ({
      unionId: selectedAddress.union,
      wardId: selectedAddress.ward,
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

  const handleVillageEdit = async () => {
    const { _id, title } = editVillage;
    const response = await updateData(`/v1/village/update/${_id}`, {
      title,
    });

    if (response?.success) {
      setIsRenameModalOpen(false);
      setAddressFields(await generateAddressFields(selectedAddress)); // refetch updated data
    }
  };

  const handleVillageDelete = async () => {
    const { _id } = editVillage;
    const response = await deleteData(`/v1/village/delete/${_id}`);

    if (response?.success) {
      setIsDeleteModalOpen(false);
      setAddressFields(await generateAddressFields(selectedAddress)); // refetch updated data
    }
  };

  return (
    <div className="mb-1 mt-4">
      <div className="grid grid-cols-[1fr_125px] items-center">
        <label className="font-bold">গ্রাম/স্ট্যাশন</label>
        <SelectWard
          disabled={disabled}
          fields={addressFields?.wards}
          onChange={handlers.handleWardChange}
          defaultValue={selectedAddress?.ward}
        />
      </div>

      {selectedAddress?.ward !== "all" && (
        <form className="my-5 grid grid-cols-[1fr_200px] items-center gap-3">
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
            className={cn("h-12 rounded-md bg-secondary hover:brightness-90", {
              "bg-accent text-neutral": loading,
            })}
          >
            গ্রাম যোগ করুন
          </button>
        </form>
      )}

      <div className="h-80 overflow-auto">
        {addressFields?.villages
          ?.filter(
            ({ wardId }) =>
              selectedAddress?.ward === "all" ||
              selectedAddress?.ward === wardId,
          )
          .map((village) => (
            <div
              key={village._id}
              className="group my-1 flex items-center justify-between px-3 py-[6px] text-xl hover:bg-primary hover:bg-opacity-10"
            >
              <span>{village.title}</span>
              <div className="mr-2 flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsRenameModalOpen(true);
                    setEditVillage(village);
                  }}
                  className="hidden text-primary group-hover:inline-block"
                >
                  <MdEdit />
                </button>
                <button
                  onClick={() => {
                    setIsDeleteModalOpen(true);
                    setEditVillage(village);
                  }}
                  className="hidden text-red-400 group-hover:inline-block"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
      </div>
      <RenameModal
        isOpen={isRenameModalOpen}
        handleVillageEdit={handleVillageEdit}
        editVillage={editVillage}
        setEditVillage={setEditVillage}
        onClose={() => setIsRenameModalOpen(false)}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        handleVillageDelete={handleVillageDelete}
        editVillage={editVillage}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </div>
  );
}
