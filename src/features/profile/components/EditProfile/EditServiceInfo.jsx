import Form from '@/components/forms/Form';
import { MultiSelect } from '@/components/forms/MultiSelect';
import Select from '@/components/forms/Select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Edit from '@/components/ui/Edit';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useMe } from '../../../../hooks/auth.hook';
import { useUpdateRider } from '../../../../hooks/user.hook';
import { ServiceInfoSchema } from '../../schemas/service-info.schema';
import SaveButton from './SaveButton';

const userSchema = yup.object({
  serviceType: yup
    .string()
    .oneOf(
      ['ব্যক্তিগত', 'ভাড়ায় চালিত'],
      '${value} is an invalid service type.'
    ),
  rentType: yup
    .string()
    .oneOf(
      ['লোকাল ভাড়া', 'রিজার্ভ ভাড়া', 'লোকাল ও রিজার্ভ ভাড়া', 'কন্টাক্ট ভাড়া'],
      '${value} is an invalid rent type.'
    ),
});

export default function EditServiceInfo() {
  //   const [serviceArea, setServiceArea] = useState([]);
  //   const [address, setAddress] = useState(null);
  //   const [mainStationAddress, setMainStationAddress] = useState({});
  //   const [addressIndex, setAddressIndex] = useState(null);
  //   const [serviceTimes, setServiceTimes] = useState([]);
  //   const [is24HourServiceTime, setIs24HourServiceTime] = useState(false);
  //   const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    mutate: updateRider,
    data: updatedRider,
    isSuccess,
    isPending,
  } = useUpdateRider();
  const { user } = useMe();

  //   useEffect(() => {
  //     const mainStation = user?.mainStation;
  //     const serviceArea = user?.serviceArea;
  //     const serviceTimeSlots = user?.serviceTimeSlots;

  //     mainStation && setMainStationAddress(mainStation);
  //     serviceArea && setServiceArea(serviceArea);
  //     serviceTimeSlots && setServiceTimes(serviceTimeSlots);
  //   }, [user]);

  const onSubmit = async (data) => {
    updateRider(data);
  };

  useEffect(() => {
    if (isSuccess && updatedRider?.success) {
      setIsDialogOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, updatedRider]);

  if (!user) return null;

  const defaultValues = {
    serviceType: user?.serviceType,
    rentType: user?.rentType || [],
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
          <DialogTitle className="text-2xl font-bold">সার্ভিস তথ্য</DialogTitle>
        </DialogHeader>

        <Form
          onSubmit={onSubmit}
          schema={ServiceInfoSchema}
          defaultValues={defaultValues}
          className="w-full p-4"
        >
          <Select
            name="serviceType"
            label="গাড়ির ব্যবহার"
            placeholder="গাড়ির ব্যবহার নির্বাচন করুন"
            options={['ব্যক্তিগত', 'ভাড়ায় চালিত'].map((option) => ({
              label: option,
              value: option,
            }))}
          />

          <MultiSelect
            name="rentType"
            label="ভাড়ার ধরণ"
            placeholder="ভাড়ার ধরণ নির্বাচন করুন"
            options={['লোকাল', 'রিজার্ভ', 'কন্টাক্ট'].map((option) => ({
              label: option,
              value: option,
            }))}
            description="একাধিক নির্বাচন করা যাবে"
          />

          {/* <ServiceTimes
            serviceTimes={serviceTimes}
            setServiceTimes={setServiceTimes}
            is24HourServiceTime={is24HourServiceTime}
            setIs24HourServiceTime={setIs24HourServiceTime}
          /> */}

          {/* <p className="text-destructive">{errors.general?.message}</p> */}

          <SaveButton isLoading={isPending} />
        </Form>
      </DialogContent>

      {/* <AddressModal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        address={address}
        setAddress={setAddress}
        serviceAddress={serviceArea}
        setServiceAddress={setServiceArea}
        addressIndex={addressIndex}
      /> */}
    </Dialog>
  );
}
