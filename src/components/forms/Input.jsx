import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input as CNInput } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

export default function Input({
  name,
  label,
  placeholder,
  type,
  className,
  description,
}) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="text-base font-bold flex items-center gap-2">
              <span>{label}</span>
              {description && (
                <FormDescription>{`(${description})`}</FormDescription>
              )}
            </FormLabel>
          )}

          <FormControl>
            <CNInput
              type={type}
              placeholder={placeholder}
              {...field}
              className={cn(
                'rounded-none border-x-0 border-b border-t-0 border-primary px-0 focus-visible:ring-0',
                className,
                {
                  'border-destructive/80': !!form.formState.errors[name],
                }
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
