import AddressInput from '@/components/address/AddressInput';
import Form from '@/components/forms/Form';
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
import { useMe } from '../../../../hooks/auth.hook';
import { useUpdateRider } from '../../../../hooks/user.hook';
import { EditMainStationSchema } from '../../schemas/address.schema';
import SaveButton from './SaveButton';

export default function EditMainStation() {
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
    mainStation: user?.mainStation,
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
        <DialogHeader className="border-b bg-background px-4 py-2 -mb-6">
          <DialogTitle className="text-2xl font-bold">
            প্রধান স্ট্যাশন
          </DialogTitle>
        </DialogHeader>

        <Form
          onSubmit={onSubmit}
          schema={EditMainStationSchema}
          defaultValues={defaultValues}
          className="w-full p-4"
        >
          <AddressInput name="mainStation" />
          <SaveButton isLoading={isPending} />
        </Form>
      </DialogContent>
    </Dialog>
  );
}
