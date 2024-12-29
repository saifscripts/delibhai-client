'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover-dialogue';
import { useUpdateServiceStatus } from '@/hooks/rider.hook';
import { useGetMe } from '@/hooks/user.hook';
import { PencilIcon } from 'lucide-react';
import { useState } from 'react';
import StatusIcon from './StatusIcon';

const serviceStatusOptions = {
  on: 'Online',
  scheduled: 'Scheduled',
  off: 'Offline',
  deactivated: 'Deactivated',
};

export function ServiceStatusPopover({ field, values, label }) {
  const [open, setOpen] = useState();
  const { mutate: updateServiceStatus } = useUpdateServiceStatus();
  const { user } = useGetMe();

  const handleUpdateServiceStatus = (e, serviceStatus) => {
    e.stopPropagation();
    updateServiceStatus(serviceStatus);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className="flex items-center gap-1 text-[10px] tracking-tighter text-muted-foreground hover:bg-foreground/10 px-1 rounded-full -ml-1"
          onClick={(e) => e.stopPropagation()}
        >
          <StatusIcon status={user?.serviceStatus} />
          <span>{serviceStatusOptions[user?.serviceStatus]}</span>
          <PencilIcon size={10} className="stroke-3" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[120px] px-1 py-[2px]" align="start">
        <div
          onClick={(e) => handleUpdateServiceStatus(e, 'on')}
          className="flex items-center gap-1 text-[12px] tracking-tighter text-muted-foreground hover:bg-foreground/10 px-1 py-[2px] rounded-sm"
        >
          <StatusIcon status="on" />
          <span>Online</span>
        </div>
        <div
          onClick={(e) => handleUpdateServiceStatus(e, 'scheduled')}
          className="flex items-center gap-1 text-[12px] tracking-tighter text-muted-foreground hover:bg-foreground/10 px-1 py-[2px] rounded-sm"
        >
          <StatusIcon status="scheduled" />
          <span>Scheduled</span>
        </div>
        <div
          onClick={(e) => handleUpdateServiceStatus(e, 'off')}
          className="flex items-center gap-1 text-[12px] tracking-tighter text-muted-foreground hover:bg-foreground/10 px-1 py-[2px] rounded-sm"
        >
          <StatusIcon status="off" />
          <span>Offline</span>
        </div>
        <div
          onClick={(e) => handleUpdateServiceStatus(e, 'deactivated')}
          className="flex items-center gap-1 text-[12px] tracking-tighter text-muted-foreground hover:bg-foreground/10 px-1 py-[2px] rounded-sm"
        >
          <StatusIcon status="deactivated" />
          <span>Deactivate</span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
