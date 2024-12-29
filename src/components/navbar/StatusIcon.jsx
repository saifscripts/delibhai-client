import { cn } from '@/lib/utils';

export default function StatusIcon({ status, className }) {
  return (
    <div
      className={cn(
        'size-2 rounded-full',
        status === 'on' && 'bg-primary',
        status === 'scheduled' && 'bg-yellow-500',
        status === 'off' && 'bg-muted-foreground',
        status === 'deactivated' && 'bg-destructive',
        className
      )}
    />
  );
}
