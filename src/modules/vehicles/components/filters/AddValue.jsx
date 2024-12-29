'use client';

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
import { PlusIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function AddValue({ field, values, label }) {
  const [open, setOpen] = useState();
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const unselectedValues = useMemo(() => {
    const selectedValues = searchParams.get(field)?.split?.(',') || [];

    return values
      .filter((v) => !selectedValues.includes(v))
      .map((v) => ({
        value: v,
        label: v,
      }));
  }, [searchParams]);

  if (unselectedValues.length === 0) {
    return <div />;
  }

  const handleAddValue = (value) => {
    const params = new URLSearchParams(searchParams);
    const selectedValues = params.get(field)?.split(',') || [];
    const newValues = [...selectedValues, value];
    params.set(field, newValues.join(','));
    setSearchParams(params, { replace: true });
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          role="combobox"
          aria-expanded={open}
          className="gap-[2px] px-1.5 h-7"
        >
          <PlusIcon />
          <span className="text-[10px]">{label}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[170px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>{label} পাওয়া যায় নি</CommandEmpty>
            <CommandGroup>
              {unselectedValues.map((value) => (
                <CommandItem
                  key={value.value}
                  value={value.value}
                  onSelect={() => handleAddValue(value.value)}
                >
                  {value.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
