import { cn } from '@/lib/utils';

export default function Section({ children, className }) {
  return (
    <section className={cn('bg-background py-3 sm:py-8', className)}>
      {children}
    </section>
  );
}
