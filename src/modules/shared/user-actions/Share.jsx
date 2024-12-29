'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Link, Shield } from 'lucide-react';
import * as React from 'react';
import { PiShareFat, PiShareFatLight } from 'react-icons/pi';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { toast } from 'sonner';

export function Share({ user }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-1">
          <span>
            <PiShareFatLight className="text-foreground/50" size={24} />
          </span>
          <span>Share</span>
        </button>
      </DialogTrigger>
      <DialogContent className="p-16 text-center rounded-2xl">
        <div className="flex items-center justify-center">
          <div className="relative size-16">
            <Shield
              size={56}
              className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <PiShareFat
              size={24}
              className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <DialogTitle className="text-xl text-primary">
          প্রিয়জনদের সাথে শেয়ার করুন রাইডারের প্রোফাইল
        </DialogTitle>
        <DialogDescription>
          এটি যাত্রার স্বচ্ছতা নিশ্চিত করে এবং জরুরি প্রয়োজনে সহজে যোগাযোগে
          সাহায্য করবে
        </DialogDescription>
        <div className="flex flex-col py-1 gap-2">
          <Button asChild>
            <a
              href={`whatsapp://send?text=${window.location.origin}/profile/${user._id}`}
              data-action="share/whatsapp/share"
            >
              <TbBrandWhatsapp />
              Share on WhatsApp
            </a>
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(
                `${window.location.origin}/profile/${user._id}`
              );
              toast.success('Link copied to clipboard');
            }}
          >
            <Link size={16} />
            Copy Link
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
