/* eslint-disable react/prop-types */
import Form from '@/components/forms/Form';
import Input from '@/components/forms/Input';
import Select from '@/components/forms/Select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Edit from '@/components/ui/Edit';
import vehicles from '@/data/vehicles';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useMe } from '../../../../hooks/auth.hook';
import { useUpdateRider } from '../../../../hooks/user.hook';
import { VehicleInfoSchema } from '../../schemas/vehicle-info.schema';
import SaveButton from './SaveButton';

export default function EditVehicleInfo({ isOpen, onClose }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    mutate: updateRider,
    data: updatedRider,
    isSuccess,
    isPending,
  } = useUpdateRider();
  const { user } = useMe();

  const onSubmit = async (data) => {
    updateRider(data);
  };

  useEffect(() => {
    if (isSuccess && updatedRider?.success) {
      setIsDialogOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, updatedRider]);

  const defaultValues = {
    vehicleType: user?.vehicleType,
    vehicleSubType: user?.vehicleSubType,
    vehicleBrand: user?.vehicleBrand,
    vehicleModel: user?.vehicleModel,
    vehicleNumber: user?.vehicleNumber,
    vehicleName: user?.vehicleName,
  };

  const { id } = useParams();
  const selfView = id === user?._id;

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      {selfView && (
        <DialogTrigger>
          <Edit />
        </DialogTrigger>
      )}
      <DialogContent className="p-0">
        <DialogHeader className="border-b bg-background px-4 py-2">
          <DialogTitle className="text-2xl font-bold">
            গাড়ির সাধারণ তথ্য
          </DialogTitle>
        </DialogHeader>

        <Form
          onSubmit={onSubmit}
          schema={VehicleInfoSchema}
          defaultValues={defaultValues}
          className="w-full p-4"
        >
          <Select
            name="vehicleType"
            label="গাড়ি"
            placeholder="গাড়ি নির্বাচন করুন"
            options={vehicles.map(({ title }) => ({
              label: title,
              value: title,
            }))}
          />

          <VehicleSubTypeSelect />

          <Input
            name="vehicleBrand"
            label="গাড়ির ব্র্যান্ড"
            placeholder="গাড়ির ব্র্যান্ড লিখুন"
          />
          <Input
            name="vehicleModel"
            label="গাড়ির মডেল"
            placeholder="গাড়ির মডেল লিখুন"
          />
          <Input
            name="vehicleNumber"
            label="গাড়ির নম্বর"
            placeholder="গাড়ির নম্বর লিখুন"
          />
          <Input
            name="vehicleName"
            label="গাড়ির নাম"
            placeholder="গাড়ির নাম লিখুন"
          />

          <SaveButton isLoading={isPending} />
        </Form>
      </DialogContent>
    </Dialog>
  );
}

function VehicleSubTypeSelect() {
  const { watch, setValue } = useFormContext();
  const vehicleType = watch('vehicleType');
  const vehicleSubType = watch('vehicleSubType');

  const vehicleSubTypes = vehicles.find(
    ({ title }) => title === vehicleType
  )?.subTypes;

  useEffect(() => {
    if (
      !vehicleSubTypes?.find?.(({ title }) => title === vehicleSubType)?.title
    ) {
      setValue('vehicleSubType', '');
    }
  }, [vehicleType]);

  if (!vehicleSubTypes || vehicleSubTypes.length === 0) return null;

  return (
    <Select
      name="vehicleSubType"
      label="গাড়ির ধরণ"
      placeholder="গাড়ির ধরণ নির্বাচন করুন"
      options={vehicleSubTypes.map(({ title }) => ({
        label: title,
        value: title,
      }))}
    />
  );
}
