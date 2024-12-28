import {
  useGetDistricts,
  useGetUnions,
  useGetUpazilas,
  useGetVillages,
} from '@/hooks/address.hook';
import englishToBengaliNumber from '@/utils/englishToBengaliNumber';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import SelectAddress from './SelectAddress';

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
  const ward = watch(`${name}.ward`);
  const village = watch(`${name}.village`);

  const { districts } = useGetDistricts(division?._id);
  const { upazilas } = useGetUpazilas(district?._id);
  const { unions } = useGetUnions(upazila?._id);
  const { villages } = useGetVillages(union?._id);

  const wardOptions = villages
    ?.filter(
      (village, i, self) =>
        self.findIndex((v) => v.wardId === village.wardId) === i
    )
    .map((village) => ({
      value: village.wardId,
      label: `${englishToBengaliNumber(village.wardId.padStart(2, '0'))}`,
    }));

  const villageOptions = villages
    ?.filter((village) => (ward?._id ? village.wardId === ward?._id : true))
    .map((village) => ({
      value: village._id,
      label: village.title,
    }));

  useEffect(() => {
    resetField(`${name}.district`);
    resetField(`${name}.upazila`);
    resetField(`${name}.union`);
    resetField(`${name}.ward`);
    resetField(`${name}.village`);
  }, [division?._id]);

  useEffect(() => {
    resetField(`${name}.upazila`);
    resetField(`${name}.union`);
    resetField(`${name}.ward`);
    resetField(`${name}.village`);
  }, [district?._id]);

  useEffect(() => {
    resetField(`${name}.union`);
    resetField(`${name}.ward`);
    resetField(`${name}.village`);
  }, [upazila?._id]);

  useEffect(() => {
    resetField(`${name}.ward`);
    resetField(`${name}.village`);
  }, [union?._id]);

  useEffect(() => {
    resetField(`${name}.village`);
  }, [ward?._id]);

  return (
    <div className="flex flex-col gap-4">
      {label && (
        <p className="border-light mb-3 pb-2 border-b font-bold">{label}</p>
      )}

      <SelectAddress
        label="বিভাগ"
        name={`${name}.division`}
        options={divisions?.map((division) => ({
          value: division._id,
          label: division.title,
        }))}
        placeholder="বিভাগ নির্বাচন করুন"
      />

      <SelectAddress
        label="জেলা"
        name={`${name}.district`}
        options={districts?.map((district) => ({
          value: district._id,
          label: district.title,
        }))}
        placeholder="জেলা নির্বাচন করুন"
      />

      <SelectAddress
        label="উপজেলা"
        name={`${name}.upazila`}
        options={upazilas?.map((upazila) => ({
          value: upazila._id,
          label: upazila.title,
        }))}
        placeholder="উপজেলা নির্বাচন করুন"
      />

      <SelectAddress
        label="ইউনিয়ন"
        name={`${name}.union`}
        options={unions?.map((union) => ({
          value: union._id,
          label: union.title,
        }))}
        placeholder="ইউনিয়ন নির্বাচন করুন"
      />

      {wardOptions.length > 0 && (
        <SelectAddress
          label="ওয়ার্ড"
          name={`${name}.ward`}
          options={wardOptions}
          placeholder="ওয়ার্ড নির্বাচন করুন"
        />
      )}

      {villageOptions.length > 0 && (
        <SelectAddress
          label="গ্রাম"
          name={`${name}.village`}
          options={villageOptions}
          placeholder="গ্রাম নির্বাচন করুন"
        />
      )}
    </div>
  );
}