import AddressInput from '@/components/forms/AddressInput';
import Form from '@/components/forms/Form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import isEqual from 'lodash/isEqual';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { useMe } from '../../../../hooks/auth.hook';
import { useUpdateRider } from '../../../../hooks/user.hook';
import { AddressSchema } from '../../schemas/address.schema';
import SaveButton from './SaveButton';

export default function EditAddressInfo({ isOpen, onClose }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAddressEqual, setIsAddressEqual] = useState(true);
  const {
    mutate: updateRider,
    data: updatedRider,
    isSuccess,
    isPending,
  } = useUpdateRider();
  const { user } = useMe();

  useEffect(() => {
    setIsAddressEqual(isEqual(user?.presentAddress, user?.permanentAddress));
  }, [user]);

  const onSubmit = async (data) => {
    data.permanentAddress = isAddressEqual
      ? data.presentAddress
      : data.permanentAddress;
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
      <DialogContent className="p-0">
        <DialogHeader className="border-b bg-background px-4 py-2 -mb-6">
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
          <Accordion type="multiple">
            <AccordionItem value="presentAddress">
              <AccordionTrigger>
                <p className="font-bold">বর্তমান ঠিকানা</p>
              </AccordionTrigger>
              <AccordionContent>
                <AddressInput name="presentAddress" />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="permanentAddress">
              <AccordionTrigger>
                <p className="font-bold">স্থায়ী ঠিকানা</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox
                    id="isAddressEqual"
                    checked={isAddressEqual}
                    onCheckedChange={setIsAddressEqual}
                  />
                  <label
                    htmlFor="isAddressEqual"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    বর্তমান ও স্থায়ী ঠিকানা একই
                  </label>
                </div>
                {!isAddressEqual && <AddressInput name="permanentAddress" />}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <SaveButton isLoading={isPending} />
        </Form>
      </DialogContent>
    </Dialog>
  );
}
