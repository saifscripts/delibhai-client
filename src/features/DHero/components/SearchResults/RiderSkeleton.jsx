import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import Container from '@/layouts/Container';

export default function RiderSkeleton() {
  return (
    <Container>
      <div className="bg-background shadow-sm rounded-lg">
        {/* Body */}
        <div className="flex items-center gap-2 rounded-lg py-2 px-3">
          {/* Avatar */}
          <Skeleton className="aspect-square w-20 rounded-full flex-shrink-0" />

          {/* Information */}
          <div className="flex-1 flex gap-2 justify-between items-center">
            <div className="flex flex-col gap-2 flex-1">
              <Skeleton className="h-4 w-[80%]" />
              <Skeleton className="h-2 w-[70%]" />
              <Skeleton className="h-2 w-[60%]" />
              <Skeleton className="h-2 w-[60%]" />
            </div>
            <Skeleton className="size-12 flex-shrink-0 rounded-lg" />
          </div>
        </div>

        <Separator className="h-[0.5px] bg-foreground/5" />

        {/* Actions */}
        <div className="flex justify-between items-center gap-4 px-3 py-2 text-sm text-foreground/50">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-16" />
        </div>
      </div>
    </Container>
  );
}
