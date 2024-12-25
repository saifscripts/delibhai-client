import MiniContainer from '@/layouts/MiniContainer';
import Filters from '@/modules/vehicles/components/filters';
import VehicleTypeHorizontal from '@/modules/vehicles/components/vehicle-type-horizontal';
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
    <MiniContainer>
      <VehicleTypeHorizontal />
      <Filters />
      <div className="mx-auto mb-3 flex w-fit max-w-full flex-col gap-3">
        {riders?.length > 0 &&
          riders?.map((rider) => <RiderCard rider={rider} key={rider._id} />)}
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
    </MiniContainer>
  );
}
