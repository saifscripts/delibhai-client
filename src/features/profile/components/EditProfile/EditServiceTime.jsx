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
import { ServiceTimeSchema } from '../../schemas/service-time.schema';
import SaveButton from './SaveButton';
import ServiceTimes from './ServiceTimes';

export default function EditServiceTime() {
  const [is24HourServiceTime, setIs24HourServiceTime] = useState(false);
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

  if (!user) return null;

  const defaultValues = {
    serviceTimeSlots: user?.serviceTimeSlots || [],
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
            সার্ভিস প্রদানের সময়
          </DialogTitle>
        </DialogHeader>

        <Form
          onSubmit={onSubmit}
          schema={ServiceTimeSchema}
          defaultValues={defaultValues}
          className="w-full p-4"
        >
          <ServiceTimes
            is24HourServiceTime={is24HourServiceTime}
            setIs24HourServiceTime={setIs24HourServiceTime}
          />
          <SaveButton isLoading={isPending} />
        </Form>
      </DialogContent>
    </Dialog>
  );
}
