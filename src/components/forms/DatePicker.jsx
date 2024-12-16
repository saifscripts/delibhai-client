import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

export default function DatePicker({ name, label, placeholder, className }) {
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
            <input
              type="date"
              placeholder={placeholder}
              {...field}
              className={cn(
                "block w-full border-b border-t-0 border-primary px-0 py-2 focus-visible:ring-0",
                className,
                {
                  "border-destructive/80": !!form.formState.errors[name],
                },
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
