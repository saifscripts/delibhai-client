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
    <div className="space-y-1.5 bg-muted dark:bg-black min-h-screen">
      <Filters />
      <div className="space-y-1.5 bg-muted dark:bg-black">
        {riders?.length > 0 &&
          riders?.map((rider) => <RiderCard rider={rider} key={rider._id} />)}

        {riders?.length === 0 && !hasMore && (
          <div className="flex flex-col items-center justify-center h-[60svh]">
            <p className="text-muted-foreground p-6 text-lg sm:text-2xl">
              কোনো গাড়ি পাওয়া যায়নি
            </p>
          </div>
        )}
        {hasMore && (
          <div ref={loader} className="space-y-1.5 bg-muted dark:bg-black">
            {Array.from({ length: 10 }).map((_, index) => (
              <RiderSkeleton key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
