import AddressInput from '@/components/address/AddressInput';
import Form from '@/components/forms/Form';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useUpdateRiderServiceArea } from '@/hooks/rider.hook';
import { ChevronRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { UpdateServiceAreaSchema } from '../../schemas/address.schema';
import SaveButton from './SaveButton';

const getTitle = (address) => {
  return address?.village?.length
    ? `${address?.union?.title} ইউনিয়ন`
    : address?.union?.title
      ? `সমগ্র ${address?.union?.title} ইউনিয়ন`
      : address?.upazila?.title
        ? `সমগ্র ${address?.upazila?.title} উপজেলা`
        : address?.district?.title
          ? `সমগ্র ${address?.district?.title} জেলা`
          : address?.division?.title
            ? `সমগ্র ${address?.division?.title} বিভাগ`
            : '';
};

export default function AddServiceArea({ address }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    mutate: updateRiderServiceArea,
    isPending,
    isSuccess,
    data: updatedRider,
  } = useUpdateRiderServiceArea();

  const onSubmit = async (data) => {
    updateRiderServiceArea({ id: address?._id, body: data.address });
  };

  useEffect(() => {
    if (isSuccess && updatedRider?.success) {
      setIsDialogOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, updatedRider]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <div className="py-2 px-3 border flex-1 rounded-lg flex items-center justify-between hover:bg-muted cursor-pointer">
          <div>
            <p className="font-bold">{getTitle(address)}</p>
            {address?.village?.length ? (
              <p>{address?.village?.map(({ title }) => title).join(', ')}</p>
            ) : null}
          </div>
          <ChevronRightIcon />
        </div>
      </DialogTrigger>

      <DialogContent className="p-0">
        <DialogHeader className="border-b bg-background px-4 py-2">
          <DialogTitle className="text-2xl font-bold">
            এলাকা পরিবর্তন করুন
          </DialogTitle>
        </DialogHeader>
        <Form
          onSubmit={onSubmit}
          schema={UpdateServiceAreaSchema}
          defaultValues={{ address }}
          className="w-full p-4"
        >
          <AddressInput name="address" />
          <SaveButton isLoading={isPending} />
        </Form>
      </DialogContent>
    </Dialog>
  );
}
