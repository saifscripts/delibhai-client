import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileSkeleton() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-5">
        {/* Avatar */}
        <Skeleton className="size-32 rounded-2xl min-[400px]:size-40" />

        <div>
          {/* Name */}
          <Skeleton className="mb-1 h-6 w-32" />

          {/* ID */}
          <Skeleton className="mb-4 h-4 w-24" />

          {/* Vehicle */}
          <Skeleton className="relative z-10 h-10 rounded-full">
            <Skeleton className="absolute right-0 top-1/2 -z-20 aspect-square w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-muted/50 p-4"></Skeleton>
            <Skeleton className="absolute right-0 top-1/2 -z-10 aspect-square w-[76px] -translate-y-1/2 translate-x-1/2 rounded-full"></Skeleton>
          </Skeleton>
        </div>
      </div>

      <div className="mb-6 overflow-y-hidden">
        <div className="-mb-5 mt-8 flex gap-2 overflow-x-scroll pb-5">
          {Array.from({ length: 6 }).map((item, index) => (
            <div
              key={index}
              className="flex w-24 flex-shrink-0 flex-col items-center justify-center p-4"
            >
              <Skeleton className="mb-2 size-12 rounded-full ring-8 ring-muted/80" />

              <Skeleton className="mt-2 h-2 w-16" />
              <Skeleton className="mt-1 h-2 w-12" />
            </div>
          ))}
        </div>
      </div>

      {Array.from({ length: 2 }).map((item, index) => (
        <div key={index} className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-12" />
          </div>
          {Array.from({ length: 4 }).map((item, index) => (
            <div key={index} className="flex items-start gap-3 border-b py-2">
              <Skeleton className="size-12 rounded-full" />
              <div>
                <Skeleton className="mb-2 h-4 w-36" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
