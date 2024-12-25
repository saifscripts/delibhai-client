'use client';

import { PlusIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import vehicles from '@/data/vehicles';
import { useSearchParams } from 'react-router-dom';
import { useFilter } from './filter.context';

export function AddVehicleSubType() {
  const { openSubTypePopover, setOpenSubTypePopover } = useFilter();
  const [value, setValue] = React.useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const unSelectedVehicleSubTypes = React.useMemo(() => {
    const vehicleType = searchParams.get('vehicleType');
    const vehicleSubType =
      searchParams.get('vehicleSubType')?.split?.(',') || [];

    return (
      vehicles.find((vehicle) => vehicle.title === vehicleType)?.subTypes || []
    )
      .filter((subType) => !vehicleSubType.includes(subType.title))
      .map((subType) => ({
        value: subType.title,
        label: subType.title,
      }));
  }, [searchParams]);

  if (unSelectedVehicleSubTypes.length === 0) {
    return <div />;
  }

  const handleAddVehicleSubType = (subType) => {
    const currentSubTypes =
      searchParams.get('vehicleSubType')?.split(',') || [];
    const newSubTypes = [...currentSubTypes, subType];
    setSearchParams(
      {
        vehicleType: searchParams.get('vehicleType'),
        vehicleSubType: newSubTypes.join(','),
      },
      { replace: true }
    );
    setOpenSubTypePopover(false);
  };

  return (
    <Popover open={openSubTypePopover} onOpenChange={setOpenSubTypePopover}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          role="combobox"
          aria-expanded={openSubTypePopover}
          className="gap-1 px-2 h-8"
        >
          <PlusIcon className="size-1" />
          <p className="text-xs">গাড়ির ধরণ</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>গাড়ির ধরণ পাওয়া যায় নি</CommandEmpty>
            <CommandGroup>
              {unSelectedVehicleSubTypes.map((subType) => (
                <CommandItem
                  key={subType.value}
                  value={subType.value}
                  onSelect={() => handleAddVehicleSubType(subType.value)}
                >
                  {subType.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
