import vehicles from '@/data/vehicles';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import VehicleSubTypeFilter from './VehicleSubTypeFilter';
import { FilterProvider } from './filter.context';

export default function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const vehicleSubTypes = useMemo(() => {
    const vehicleType = searchParams.get('vehicleType');
    return (
      vehicles.find((vehicle) => vehicle.title === vehicleType)?.subTypes || []
    );
  }, [searchParams]);

  if (!vehicleSubTypes || vehicleSubTypes.length === 0) {
    return null;
  }

  return (
    <FilterProvider>
      <div className="p-2">
        <h2 className="text-lg pb-2 text-foreground/70">ফিল্টার করুন:</h2>
        <div className="flex gap-2">
          <VehicleSubTypeFilter />
        </div>
      </div>
    </FilterProvider>
  );
}
