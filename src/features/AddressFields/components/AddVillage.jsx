import { cloneDeep } from "lodash";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import axios from "../../../lib/api";
import { showErrorToast } from "../../../lib/toast";
import { useAddress } from "../contexts/AddressContext";
import generateAddressFields from "../utils/generateAddressFields";
import cn from "./../../../lib/cn";
import DeleteModal from "./DeleteModal";
import RenameModal from "./RenameModal";
import SelectWard from "./SelectWard";

export default function AddVillage() {
  const [loading, setLoading] = useState(false);
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [villages, setVillages] = useState("");
  const [editVillage, setEditVillage] = useState(null);

  const { address, ward, addressFields, setAddressFields } = useAddress();

  const handleVillageAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    const villageArray = villages.split(",").map((village) => ({
      unionId: address.union._id,
      wardId: ward,
      title: village.trim(),
    }));

    const response = await axios.post("/village", { villages: villageArray });

    if (response?.data?.success) {
      const _addressFields = cloneDeep(addressFields);
      _addressFields.villages.unshift(...response.data.data);
      setAddressFields(_addressFields);
      setVillages("");
    } else if (response?.code === "ALREADY_EXIST") {
      showErrorToast(
        `${response?.data?.titles.join(", ")} ইতিমধ্যে যোগ করা হয়েছে।`,
      );
    }
    setLoading(false);
  };

  const handleVillageEdit = async () => {
    const { _id, title, unionId } = editVillage;

    const response = await axios.put(`/village/${_id}`, {
      title,
      unionId,
    });

    if (response?.data?.success) {
      setIsRenameModalOpen(false);
      setAddressFields(await generateAddressFields(address)); // refetch updated data
    } else {
      showErrorToast(`${response?.data?.title} ইতিমধ্যে যোগ করা হয়েছে`);
    }
  };

  const handleVillageDelete = async () => {
    const { _id } = editVillage;
    const response = await axios.delete(`/village/${_id}`);

    if (response?.data?.success) {
      setIsDeleteModalOpen(false);
      setAddressFields(await generateAddressFields(address)); // refetch updated data
    }
  };

  return (
    <div className="mb-1 mt-4">
      <div className="grid grid-cols-[1fr_125px] items-center">
        <label className="font-bold">গ্রাম/স্ট্যাশন</label>
        <SelectWard />
      </div>

      {ward && (
        <form className="my-5 grid grid-cols-[1fr_200px] items-center gap-3">
          <input
            onChange={(e) => setVillages(e.target.value)}
            value={villages}
            type="text"
            className="h-12 w-full rounded-md border p-2"
          />
          <button
            onClick={handleVillageAdd}
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
          ?.filter(({ wardId }) => !ward || ward === wardId)
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
