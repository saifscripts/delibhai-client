'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Link } from 'lucide-react';
import * as React from 'react';
import { PiShareFat } from 'react-icons/pi';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { toast } from 'sonner';

export function Share({ rider }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-1">
          <span>
            <PiShareFat className="" size={16} />
          </span>
          <span>Share</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 mr-4">
        <div className="flex flex-col py-1">
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `${window.location.origin}/profile/${rider._id}`
              );
              toast.success('Link copied to clipboard');
            }}
            className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1"
          >
            <Link size={16} />
            Copy Link
          </button>

          <a
            href={`whatsapp://send?text=${window.location.origin}/profile/${rider._id}`}
            data-action="share/whatsapp/share"
            className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1"
          >
            <TbBrandWhatsapp />
            Share on WhatsApp
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}
