import Container from '@/layouts/Container';

export default function RiderSkeleton() {
  return (
    <Container className="w-full">
      <div className="bg-background shadow-sm rounded-lg p-2 w-full">
        <div className="flex items-center gap-2 rounded-lg w-full">
          <div className="aspect-square w-20 rounded-full flex-shrink-0 bg-slate-400" />
          <div className="flex-1 w-full">
            <div className="flex gap-2 justify-between w-full">
              <div className="flex flex-col gap-2">
                <div className="h-4 w-32 rounded bg-slate-400" />
                <div className="h-2 w-36 rounded bg-slate-400" />
                <div className="h-2 w-32 rounded bg-slate-400" />
              </div>
              <div className="size-[30px] flex-shrink-0 rounded-lg bg-slate-400" />
            </div>

            <div className="flex justify-between items-center gap-1 mt-2">
              <div className="flex gap-1">
                <div className="h-5 w-14 rounded bg-slate-400" />
                <div className="h-5 w-14 rounded bg-slate-400" />
              </div>
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded bg-slate-400" />
                <div className="h-4 w-10 rounded bg-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
