import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Edit from '@/components/ui/Edit';
import { useDeleteRiderServiceArea } from '@/hooks/rider.hook';
import { Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMe } from '../../../../hooks/auth.hook';
import AddServiceArea from './AddServiceArea';
import UpdateServiceArea from './UpdateServiceArea';

export default function EditServiceArea() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { user } = useMe();
  const { mutate: deleteRiderServiceArea, isPending } =
    useDeleteRiderServiceArea();

  if (!user) return null;

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
        <DialogHeader className="border-b bg-background px-4 py-2 rounded-b-none">
          <DialogTitle className="text-2xl font-bold">
            সার্ভিস প্রদানের এলাকা সমূহ
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 mx-4">
          {user?.serviceArea?.map((address, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-2"
            >
              <UpdateServiceArea address={address} />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteRiderServiceArea(address?._id)}
                disabled={isPending}
              >
                <Trash2Icon />
              </Button>
            </div>
          ))}
        </div>

        <div className="px-4 pb-4 flex justify-end">
          <AddServiceArea />
        </div>
      </DialogContent>
    </Dialog>
  );
}
