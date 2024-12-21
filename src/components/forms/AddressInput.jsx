import {
  useGetDistricts,
  useGetUnions,
  useGetUpazilas,
  useGetVillages,
} from '@/hooks/address.hook';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Combobox from './Combobox';

const divisions = [
  {
    _id: '660877f14acc081c2ec906c9',
    title: 'চট্টগ্রাম',
  },
  {
    _id: '660877f14acc081c2ec906cd',
    title: 'রংপুর',
  },
  {
    _id: '660877f14acc081c2ec906c8',
    title: 'ঢাকা',
  },
  {
    _id: '660877f14acc081c2ec906ce',
    title: 'বরিশাল',
  },
  {
    _id: '660877f14acc081c2ec906ca',
    title: 'রাজশাহী',
  },
  {
    _id: '660877f14acc081c2ec906cb',
    title: 'খুলনা',
  },
  {
    _id: '660877f14acc081c2ec906cc',
    title: 'ময়মনসিংহ',
  },
  {
    _id: '660877f14acc081c2ec906cf',
    title: 'সিলেট',
  },
];

export default function AddressInput({ name, label }) {
  const { watch, setValue, resetField } = useFormContext();

  const division = watch(`${name}.division`);
  const district = watch(`${name}.district`);
  const upazila = watch(`${name}.upazila`);
  const union = watch(`${name}.union`);
  const village = watch(`${name}.village`);

  const { districts } = useGetDistricts(division);
  const { upazilas } = useGetUpazilas(district);
  const { unions } = useGetUnions(upazila);
  const { villages } = useGetVillages(union);

  useEffect(() => {
    resetField(`${name}.district`);
    resetField(`${name}.upazila`);
    resetField(`${name}.union`);
    resetField(`${name}.village`);
  }, [division]);

  useEffect(() => {
    resetField(`${name}.upazila`);
    resetField(`${name}.union`);
    resetField(`${name}.village`);
  }, [district]);

  useEffect(() => {
    resetField(`${name}.union`);
    resetField(`${name}.village`);
  }, [upazila]);

  useEffect(() => {
    resetField(`${name}.village`);
  }, [union]);

  return (
    <div className="flex flex-col gap-4">
      {label && (
        <p className="border-light mb-3 pb-2 border-b font-bold">{label}</p>
      )}

      <Combobox
        label="বিভাগ"
        name={`${name}.division`}
        options={divisions?.map((division) => ({
          value: division._id,
          label: division.title,
        }))}
        placeholder="বিভাগ নির্বাচন করুন"
        searchPlaceholder="বিভাগ সার্চ করুন"
        emptyMessage="কোনো বিভাগ পাওয়া যায়নি"
        className="w-full"
      />

      <Combobox
        label="জেলা"
        name={`${name}.district`}
        options={districts?.map((district) => ({
          value: district._id,
          label: district.title,
        }))}
        placeholder="জেলা নির্বাচন করুন"
        searchPlaceholder="জেলা সার্চ করুন"
        emptyMessage="কোনো জেলা পাওয়া যায়নি"
      />

      <Combobox
        label="উপজেলা"
        name={`${name}.upazila`}
        options={upazilas?.map((upazila) => ({
          value: upazila._id,
          label: upazila.title,
        }))}
        placeholder="উপজেলা নির্বাচন করুন"
        searchPlaceholder="উপজেলা সার্চ করুন"
        emptyMessage="কোনো উপজেলা পাওয়া যায়নি"
      />

      <Combobox
        label="ইউনিয়ন"
        name={`${name}.union`}
        options={unions?.map((union) => ({
          value: union._id,
          label: union.title,
        }))}
        placeholder="ইউনিয়ন নির্বাচন করুন"
        searchPlaceholder="ইউনিয়ন সার্চ করুন"
        emptyMessage="কোনো ইউনিয়ন পাওয়া যায়নি"
      />

      {villages.length > 0 && (
        <Combobox
          label="গ্রাম"
          name={`${name}.village`}
          options={villages?.map((village) => ({
            value: village._id,
            label: village.title,
          }))}
          placeholder="গ্রাম নির্বাচন করুন"
          searchPlaceholder="গ্রাম সার্চ করুন"
          emptyMessage="কোনো গ্রাম পাওয়া যায়নি"
        />
      )}
    </div>
  );
}
