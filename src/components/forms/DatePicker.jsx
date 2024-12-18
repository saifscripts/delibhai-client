import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";
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
            <div className="relative">
              <input
                type="date"
                placeholder={placeholder}
                {...field}
                className={cn(
                  "block w-full border-b border-t-0 border-primary bg-transparent px-0 py-2 text-foreground focus-visible:ring-0",
                  className,
                  {
                    "border-destructive/80": !!form.formState.errors[name],
                  },
                )}
              />
              <CalendarDays className="absolute right-0 top-1/2 -z-10 -translate-y-1/2 cursor-pointer text-foreground/70" />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
