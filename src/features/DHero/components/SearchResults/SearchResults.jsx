import Filters from '@/modules/vehicles/components/filters';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRiders } from '../../../../hooks/rider.hook';
import RiderCard from './RiderCard';
import RiderSkeleton from './RiderSkeleton';

export default function SearchResults() {
  const { riders, hasMore, loader } = useRiders();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Filters />
      <div className="mx-auto mb-3 flex w-fit max-w-full flex-col gap-3">
        {riders?.length > 0 ? (
          riders?.map((rider) => <RiderCard rider={rider} key={rider._id} />)
        ) : (
          <div className="flex flex-col items-center justify-center h-[60svh]">
            <p className="text-muted-foreground p-6 text-lg sm:text-2xl">
              কোনো গাড়ি পাওয়া যায়নি
            </p>
          </div>
        )}
        {hasMore && (
          <div
            ref={loader}
            className="mx-auto flex w-fit max-w-full flex-col gap-3"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <RiderSkeleton key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
