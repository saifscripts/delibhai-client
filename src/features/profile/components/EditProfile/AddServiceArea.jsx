import AddressInput from '@/components/address/AddressInput';
import Form from '@/components/forms/Form';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useAddRiderServiceArea } from '@/hooks/rider.hook';
import { PlusIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AddServiceAreaSchema } from '../../schemas/address.schema';
import SaveButton from './SaveButton';

export default function AddServiceArea({}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    mutate: addRiderServiceArea,
    isPending,
    isSuccess,
    data: updatedRider,
  } = useAddRiderServiceArea();

  const onSubmit = async (data) => {
    addRiderServiceArea(data.serviceArea);
  };

  useEffect(() => {
    if (isSuccess && updatedRider?.success) {
      setIsDialogOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, updatedRider]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <Button variant="secondary">
          <PlusIcon />
          <span>যোগ করুন</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0">
        <DialogHeader className="border-b bg-background px-4 py-2">
          <DialogTitle className="text-2xl font-bold">
            নতুন এলাকা যোগ করুন
          </DialogTitle>
        </DialogHeader>
        <Form
          onSubmit={onSubmit}
          schema={AddServiceAreaSchema}
          className="w-full p-4"
        >
          <AddressInput name="serviceArea" />
          <SaveButton isLoading={isPending} />
        </Form>
      </DialogContent>
    </Dialog>
  );
}
