import { Form as ShadCNForm } from '@/components/ui/form';
import { cn, convertPropertiesToString } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function Form({
  schema,
  defaultValues,
  onSubmit,
  children,
  className,
  ...props
}) {
  const form = useForm({
    resolver: schema && zodResolver(schema),
    defaultValues: convertPropertiesToString(defaultValues),
  });

  // wrap submit handler to reset form if onSubmit returns true
  const submitHandler = async (data) => {
    const shouldReset = await onSubmit(data);

    if (shouldReset) {
      form.reset();
    }
  };

  return (
    <ShadCNForm {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className={cn('w-full space-y-4', className)}
        {...props}
      >
        {children}
      </form>
    </ShadCNForm>
  );
}
