/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { getAllDivision } from "bd-divisions-to-unions";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useUpdateData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import { useAuth } from "../../../contexts/AuthContext";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import TopPanel from "../../../layouts/TopPanel";
import getSelectedAddress from "../utils/getSelectedAddress";
import restoreAddressState from "../utils/restoreAddressState";
import { Address } from "./Address";
import { ServiceTime } from "./ServiceTime";

const userSchema = yup.object({
  serviceUsage: yup
    .string()
    .oneOf(
      ["ব্যক্তিগত", "ভাড়ায় চালিত"],
      "${value} is an invalid service usage."
    ),
  serviceType: yup
    .string()
    .oneOf(
      ["লোকাল ভাড়া", "রিজার্ভ ভাড়া", "লোকাল ও রিজার্ভ ভাড়া", "কন্টাক্ট ভাড়া"],
      "${value} is an invalid service type."
    ),
});

const defaultAddressValue = {
  division: getAllDivision(),
  district: null,
  upazila: null,
  union: null,
};

const EditServiceInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [serviceAddress, setServiceAddress] = useState(defaultAddressValue);
  const [serviceTime, setServiceTime] = useState([]);
  const { currentUser, setCurrentUser } = useAuth();
  const { updateData } = useUpdateData();
  const navigate = useNavigate();

  useEffect(() => {
    const serviceAddress = currentUser?.serviceAddress;
    const serviceTime = currentUser?.serviceTime;

    serviceAddress && setServiceAddress(restoreAddressState(serviceAddress));
    serviceTime && setServiceTime(serviceTime);
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
    userData.serviceAddress = getSelectedAddress(serviceAddress);
    userData.serviceTime = serviceTime;

    // Update data
    const { data, error } = await updateData(
      `/v1/user/${currentUser._id}`,
      userData
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
      <TopPanel />
      <Title
        title="সার্ভিস তথ্য"
        subtitle="অনুগ্রহ করে সঠিক তথ্য দিয়ে একটি একাউন্ড তৈরী করুন"
      />
      <MiniContainer>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
          <div className="mt-4 mb-1">
            <label className="font-bold">গাড়ির ব্যবহার</label>
            <select
              {...register("serviceUsage")}
              disabled={isLoading}
              className="w-full py-3 border-b border-primary bg-transparent"
            >
              <option value="ব্যক্তিগত">ব্যক্তিগত</option>
              <option value="ভাড়ায় চালিত">ভাড়ায় চালিত</option>
            </select>
            <p className="text-red-400">{errors.serviceUsage?.message}</p>
          </div>

          <div className="mt-4 mb-1">
            <label className="font-bold">গাড়ির সেবা</label>
            <select
              {...register("serviceType")}
              disabled={isLoading}
              className="w-full py-3 border-b border-primary bg-transparent"
            >
              <option value="লোকাল ভাড়া">লোকাল ভাড়া</option>
              <option value="রিজার্ভ ভাড়া">রিজার্ভ ভাড়া</option>
              <option value="লোকাল ও রিজার্ভ ভাড়া">লোকাল ও রিজার্ভ ভাড়া</option>
              <option value="কন্টাক্ট ভাড়া">কন্টাক্ট ভাড়া</option>
            </select>
            <p className="text-red-400">{errors.serviceType?.message}</p>
          </div>

          <p className="font-bold mt-4 mb-3 py-3 border-b border-light">
            সার্ভিস প্রদানের এলাকা
          </p>

          <Address address={serviceAddress} setAddress={setServiceAddress} />

          <ServiceTime
            serviceTime={serviceTime}
            setServiceTime={setServiceTime}
          />

          <p className="text-red-400">{errors.general?.message}</p>

          <Button disabled={isLoading} type="submit" value="সংরক্ষণ করুন" />
        </form>
      </MiniContainer>
    </>
  );
};

export { EditServiceInfo };
