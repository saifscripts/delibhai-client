import AddressInput from '@/components/forms/AddressInput';
import Form from '@/components/forms/Form';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { useMe } from '../../../../hooks/auth.hook';
import { useUpdateRider } from '../../../../hooks/user.hook';
import { AddressSchema } from '../../schemas/address.schema';
import SaveButton from './SaveButton';

export default function EditAddressInfo({ isOpen, onClose }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  //   const [isAddressEqual, setIsAddressEqual] = useState(true);
  //   const [presentAddress, setPresentAddress] = useState(null);
  //   const [permanentAddress, setPermanentAddress] = useState(null);
  const {
    mutate: updateRider,
    data: updatedRider,
    isSuccess,
    isPending,
  } = useUpdateRider();
  const { user } = useMe();

  //   useEffect(() => {
  //     const presentAddress = user?.presentAddress;
  //     const permanentAddress = user?.permanentAddress;

  //     presentAddress && setPresentAddress(presentAddress);
  //     permanentAddress && setPermanentAddress(permanentAddress);

  //     setIsAddressEqual(isEqual(presentAddress, permanentAddress));
  //   }, [user]);

  const onSubmit = async (data) => {
    console.log(data);
    // updateRider(data);
  };

  useEffect(() => {
    if (isSuccess && updatedRider?.success) {
      setIsDialogOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, updatedRider]);

  const defaultValues = {
    presentAddress: user?.presentAddress,
    permanentAddress: user?.permanentAddress,
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="link">Edit</Button>
      </DialogTrigger>
      <DialogContent className="hide-scrollbar max-h-[100svh] w-[512px] max-w-full overflow-y-scroll p-0">
        <DialogHeader className="border-b bg-background px-4 py-2">
          <DialogTitle className="text-2xl font-bold">ঠিকানা</DialogTitle>
        </DialogHeader>

        <Form
          onSubmit={onSubmit}
          schema={z.object({
            presentAddress: AddressSchema.optional(),
            permanentAddress: AddressSchema.optional(),
          })}
          defaultValues={defaultValues}
          className="w-full p-4"
        >
          <AddressInput name="presentAddress" label="বর্তমান ঠিকানা" />

          {/* <p className="border-light mb-3 mt-4 border-b py-3 font-bold">
          স্থায়ী ঠিকানা
        </p>

        <RadioInput
          label="বর্তমান ও স্থায়ী ঠিকানা একই"
          checked={isAddressEqual}
          onClick={() => setIsAddressEqual(true)}
        />

        <RadioInput
          label="বর্তমান ও স্থায়ী ঠিকানা একই নয়"
          checked={!isAddressEqual}
          onClick={() => setIsAddressEqual(false)}
        />

        {!isAddressEqual && (
          <AddressFields
            address={permanentAddress}
            setAddress={setPermanentAddress}
            villageType="select"
          />
        )} */}
          <SaveButton isLoading={isPending} />
        </Form>
      </DialogContent>
    </Dialog>
  );
}
