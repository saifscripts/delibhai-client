import { Badge } from '@/components/ui/badge';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover-dialogue';
import { Plus, Square, SquareCheckBig, X } from 'lucide-react';
import * as React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

export function MultiSelect({
  options,
  name,
  label,
  placeholder,
  description,
  emptyMessage,
}) {
  const form = useFormContext();
  const [open, setOpen] = React.useState(false);
  const selected =
    Object.values(useWatch({ control: form.control, name })) || [];

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="flex flex-col">
            {label && (
              <FormLabel className="text-base font-bold flex items-center gap-2">
                <span>{label}</span>
                {description && (
                  <FormDescription>{`(${description})`}</FormDescription>
                )}
              </FormLabel>
            )}

            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <div
                  role="combobox"
                  aria-expanded={open}
                  className="w-full flex items-center justify-between h-auto px-0 py-2 border-b border-primary cursor-pointer"
                >
                  {selected && selected.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {selected &&
                        selected.length > 0 &&
                        selected.map((item) => (
                          <Badge
                            key={item}
                            variant="secondary"
                            className="gap-2"
                          >
                            {item}
                            <button
                              className="ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  form.setValue(
                                    name,
                                    selected.filter((i) => i !== item)
                                  );
                                  setOpen(false);
                                }
                              }}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                form.setValue(
                                  name,
                                  selected.filter((i) => i !== item)
                                );
                              }}
                            >
                              <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                            </button>
                          </Badge>
                        ))}
                    </div>
                  ) : (
                    placeholder
                  )}
                  <Plus className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandEmpty>
                    {emptyMessage || 'No options found'}
                  </CommandEmpty>
                  <CommandList>
                    <CommandGroup>
                      {options.map((option) => (
                        <CommandItem
                          key={option.value}
                          onSelect={() => {
                            form.setValue(
                              name,
                              selected.some((item) => item === option.value)
                                ? selected.filter(
                                    (item) => item !== option.value
                                  )
                                : [...selected, option.value]
                            );
                            setOpen(false);
                          }}
                          className="justify-between gap-4"
                        >
                          {selected.some((item) => item === option.value) ? (
                            <SquareCheckBig className="h-4 w-4" />
                          ) : (
                            <Square className="h-4 w-4" />
                          )}
                          {option.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
