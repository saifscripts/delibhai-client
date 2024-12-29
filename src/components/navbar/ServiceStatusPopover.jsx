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

const serviceStatusOptions = [
  { label: 'Online', value: 'on' },
  { label: 'Scheduled', value: 'scheduled' },
  { label: 'Offline', value: 'off' },
  { label: 'Deactivated', value: 'deactivated' },
];

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
          className="flex items-center gap-2 tracking-tighter text-muted-foreground px-1 rounded-full -ml-1 group border border-foreground/10"
          onClick={(e) => e.stopPropagation()}
        >
          <StatusIcon status={user?.serviceStatus} />
          <span>
            {
              serviceStatusOptions.find(
                (option) => option.value === user?.serviceStatus
              )?.label
            }
          </span>
          <PencilIcon size={10} className="stroke-3" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[120px] p-1" align="start">
        {serviceStatusOptions.map((option) => (
          <div
            onClick={(e) => handleUpdateServiceStatus(e, option.value)}
            className="flex items-center gap-1 tracking-tighter text-muted-foreground hover:bg-foreground/10 px-1 py-[2px] rounded-sm"
          >
            <StatusIcon status={option.value} />
            <span>{option.label}</span>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
