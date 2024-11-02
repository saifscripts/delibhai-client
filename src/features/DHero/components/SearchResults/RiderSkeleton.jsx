export default function RiderSkeleton() {
  return (
    <div className="flex animate-pulse items-center gap-5 rounded-lg border border-primary/20 px-4 py-2 shadow">
      <div className="aspect-square w-28 rounded-full bg-slate-700"></div>

      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 w-32 rounded bg-slate-700"></div>
        <div className="h-2 w-36 rounded bg-slate-700"></div>
        <div className="h-2 w-12 rounded bg-slate-700"></div>
        <div className="space-y-3">
          <div className="grid w-44 grid-cols-2 gap-4">
            <div className="h-8 rounded bg-slate-700"></div>
            <div className="h-8 rounded bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
