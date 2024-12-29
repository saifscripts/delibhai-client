import Form from '@/components/forms/Form';
import Input from '@/components/forms/Input';
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
import { ContactInfoSchema } from '../../schemas/contact-info.schema';
import SaveButton from './SaveButton';

export default function EditContactInfo({ isOpen, onClose }) {
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
    contactNo1: user?.contactNo1,
    contactNo2: user?.contactNo2,
    email: user?.email,
    facebookURL: user?.facebookURL,
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
            কন্টাক্ট ইনফো
          </DialogTitle>
        </DialogHeader>

        <Form
          onSubmit={onSubmit}
          schema={ContactInfoSchema}
          defaultValues={defaultValues}
          className="w-full p-4"
        >
          <Input
            name="contactNo1"
            type="number"
            label="মোবাইল নাম্বার"
            placeholder="মোবাইল নাম্বার লিখুন"
            description="পাবলিক যে নাম্বারে কল করবে"
          />
          <Input
            name="contactNo2"
            type="number"
            label="হোয়াটসঅ্যাপ নাম্বার"
            placeholder="হোয়াটসঅ্যাপ নাম্বার লিখুন"
          />
          <Input name="email" label="ই-মেইল" placeholder="ই-মেইল লিখুন" />
          <Input
            name="facebookURL"
            label="ফেইসবুক লিংক"
            placeholder="ফেইসবুক লিংক লিখুন"
          />

          <SaveButton isLoading={isPending} />
        </Form>
      </DialogContent>
    </Dialog>
  );
}
