/* eslint-disable react/prop-types */
import Form from '@/components/forms/Form';
import Input from '@/components/forms/Input';
import Select from '@/components/forms/Select';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import vehicles from '@/data/vehicles';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
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
    vehicleBrand: user?.vehicleBrand,
    vehicleModel: user?.vehicleModel,
    vehicleNumber: user?.vehicleNumber,
    vehicleName: user?.vehicleName,
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="link">Edit</Button>
      </DialogTrigger>
      <DialogContent className="hide-scrollbar max-h-[100svh] w-[512px] max-w-full overflow-y-scroll p-0">
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
  const { watch } = useFormContext();
  const vehicleType = watch('vehicleType');
  const vehicleSubTypes = vehicles.find(
    ({ title }) => title === vehicleType
  )?.subTypes;

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
