import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

export default function SelectAddress({
  name,
  label,
  placeholder,
  className,
  options,
}) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="text-base font-bold">{label}</FormLabel>
          )}
          <FormControl>
            <select
              onChange={(e) =>
                field.onChange({
                  _id: e.target.value,
                  title: options.find(
                    (option) => option.value === e.target.value
                  )?.label,
                })
              }
              value={field.value?._id}
              placeholder={placeholder}
              className={cn(
                'block w-full bg-transparent border-b border-primary px-0 py-2 outline-none',
                className
              )}
            >
              <option value="">{placeholder}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {/* <CNSelect onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger
                className={cn(
                  'rounded-none border-x-0 border-b border-t-0 border-primary px-0 focus:ring-0',
                  className,
                  {
                    'border-destructive/80': !!form.formState.errors[name],
                  }
                )}
              >
                <SelectValue placeholder={placeholder || 'Select an option'} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </CNSelect> */}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
