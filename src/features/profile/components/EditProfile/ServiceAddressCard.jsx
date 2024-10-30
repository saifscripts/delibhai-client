import cloneDeep from "lodash/cloneDeep";
import { MdDelete, MdEdit } from "react-icons/md";

const ServiceAddressCard = ({
  index,
  address,
  setAddress,
  setAddressIndex,
  setIsAddressModalOpen,
  serviceAddress,
  setServiceAddress,
}) => {
  const title = address?.village?.length
    ? `${address?.union?.title} ইউনিয়ন`
    : address?.union?.title
      ? `সমগ্র ${address?.union?.title} ইউনিয়ন`
      : address?.upazila?.title
        ? `সমগ্র ${address?.upazila?.title} উপজেলা`
        : address?.district?.title
          ? `সমগ্র ${address?.district?.title} জেলা`
          : address?.division?.title
            ? `সমগ্র ${address?.division?.title} বিভাগ`
            : "";

  return (
    <div className="rounded-lg bg-secondary bg-opacity-10 p-2">
      <div className="flex flex-col gap-5 rounded-lg bg-primary bg-opacity-5 p-3">
        <div className="flex items-center justify-between">
          <p className="mb-1 font-semibold">{title}</p>
          <div className="space-x-1">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                setAddress(address);
                setAddressIndex(index);
                setIsAddressModalOpen(true);
              }}
              className="rounded-lg p-2 text-primary hover:bg-neutral"
            >
              {<MdEdit />}
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                const _serviceAddress = cloneDeep(serviceAddress);
                _serviceAddress.splice(index, 1);
                setServiceAddress(_serviceAddress);
              }}
              className="rounded-lg p-2 text-red-400 hover:bg-neutral"
            >
              {<MdDelete />}
            </button>
          </div>
        </div>

        {address?.village?.length ? (
          <p>{address?.village?.map(({ title }) => title).join(", ")}</p>
        ) : null}
      </div>
    </div>
  );
};

export default ServiceAddressCard;
