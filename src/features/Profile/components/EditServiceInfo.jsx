import { yupResolver } from "@hookform/resolvers/yup";
import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillPlusSquare } from "react-icons/ai";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useUpdateData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import { useAuth } from "../../Authentication/contexts/AuthContext";
import getAddressId from "../utils/getAddressId";
import AddressModal from "./AddressModal";
import ServiceTimes from "./ServiceTimes";

const userSchema = yup.object({
  serviceUsage: yup
    .string()
    .oneOf(
      ["ব্যক্তিগত", "ভাড়ায় চালিত"],
      "${value} is an invalid service usage.",
    ),
  serviceType: yup
    .string()
    .oneOf(
      ["লোকাল ভাড়া", "রিজার্ভ ভাড়া", "লোকাল ও রিজার্ভ ভাড়া", "কন্টাক্ট ভাড়া"],
      "${value} is an invalid service type.",
    ),
});

export default function EditServiceInfo() {
  const [isLoading, setIsLoading] = useState(false);
  const [serviceAddress, setServiceAddress] = useState([]);
  const [address, setAddress] = useState(null);
  const [addressIndex, setAddressIndex] = useState(null);
  const [serviceTimes, setServiceTimes] = useState([]);
  const [is24HourServiceTime, setIs24HourServiceTime] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const { currentUser, setCurrentUser } = useAuth();
  const { updateData } = useUpdateData();
  const navigate = useNavigate();

  useEffect(() => {
    const serviceAddress = currentUser?.serviceAddress;
    const serviceTimes = currentUser?.serviceTimes;

    serviceAddress && setServiceAddress(serviceAddress);
    serviceTimes && setServiceTimes(serviceTimes);
  }, [currentUser]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      serviceUsage: currentUser?.serviceUsage,
      serviceType: currentUser?.serviceType,
    },
  });

  const onSubmit = async (userData) => {
    setIsLoading(true);
    userData.serviceAddress = serviceAddress?.map((address) =>
      getAddressId(address),
    );
    if (is24HourServiceTime) {
      userData.serviceTimes = [{ start: "00:00", end: "23:59" }];
    } else {
      userData.serviceTimes = serviceTimes;
    }

    // Update data
    const { data, error } = await updateData(
      `/v1/user/${currentUser._id}`,
      userData,
    );

    if (data?.success) {
      setCurrentUser(data.data);
      return navigate(-1);
    } else {
      setError("general", { message: error?.message });
    }

    setIsLoading(false);
  };

  return (
    <>
      <Title
        title="সার্ভিস তথ্য"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />
      <MiniContainer>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
          <div className="mb-1 mt-4">
            <label className="font-bold">গাড়ির ব্যবহার</label>
            <select
              {...register("serviceUsage")}
              disabled={isLoading}
              className="w-full border-b border-primary bg-transparent py-3"
            >
              <option value="ব্যক্তিগত">ব্যক্তিগত</option>
              <option value="ভাড়ায় চালিত">ভাড়ায় চালিত</option>
            </select>
            <p className="text-red-400">{errors.serviceUsage?.message}</p>
          </div>

          <div className="mb-1 mt-4">
            <label className="font-bold">গাড়ির সেবা</label>
            <select
              {...register("serviceType")}
              disabled={isLoading}
              className="w-full border-b border-primary bg-transparent py-3"
            >
              <option value="লোকাল ভাড়া">লোকাল ভাড়া</option>
              <option value="রিজার্ভ ভাড়া">রিজার্ভ ভাড়া</option>
              <option value="লোকাল ও রিজার্ভ ভাড়া">লোকাল ও রিজার্ভ ভাড়া</option>
              <option value="কন্টাক্ট ভাড়া">কন্টাক্ট ভাড়া</option>
            </select>
            <p className="text-red-400">{errors.serviceType?.message}</p>
          </div>

          <p className="border-light mb-3 mt-4 border-b py-3 font-bold">
            সার্ভিস প্রদানের এলাকা
          </p>

          <div className="my-6 flex flex-col gap-2">
            {serviceAddress?.map((address, index) => (
              <div
                key={index}
                className="rounded-lg bg-secondary bg-opacity-10 p-2"
              >
                <div className="flex flex-col gap-5 rounded-lg bg-primary bg-opacity-5 p-3">
                  <div className="flex items-center justify-between">
                    <p className="mb-1 font-semibold">
                      {address?.union?.title} ইউনিয়ন
                    </p>
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

                  <p>
                    {address?.village?.map(({ title }) => title).join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              setIsAddressModalOpen(true);
              setAddress(null);
              setAddressIndex(serviceAddress.length);
            }}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-2 py-2 text-xl text-white"
          >
            <AiFillPlusSquare />
            <span>নতুন এলাকা যোগ করুন</span>
          </button>

          <ServiceTimes
            serviceTimes={serviceTimes}
            setServiceTimes={setServiceTimes}
            is24HourServiceTime={is24HourServiceTime}
            setIs24HourServiceTime={setIs24HourServiceTime}
          />

          <p className="text-red-400">{errors.general?.message}</p>

          <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
        </form>
      </MiniContainer>
      <AddressModal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        address={address}
        setAddress={setAddress}
        serviceAddress={serviceAddress}
        setServiceAddress={setServiceAddress}
        addressIndex={addressIndex}
      />
    </>
  );
}
