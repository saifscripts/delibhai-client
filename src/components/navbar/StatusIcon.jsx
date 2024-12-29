import { cn } from '@/lib/utils';

export default function StatusIcon({ status, className }) {
  return (
    <div
      className={cn(
        'size-[10px] rounded-full',
        status === 'on' && 'bg-primary',
        status === 'scheduled' && 'bg-yellow-500',
        status === 'off' && 'bg-muted-foreground',
        status === 'deactivated' && 'bg-destructive',
        className
      )}
    />
  );
}
