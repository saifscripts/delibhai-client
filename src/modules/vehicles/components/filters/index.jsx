import vehicles from '@/data/vehicles';
import Container from '@/layouts/Container';
import { cn } from '@/lib/utils';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import VehicleSubTypeFilter from './VehicleSubTypeFilter';
import VehicleTypeFilter from './VehicleTypeFilter';
import { FilterProvider } from './filter.context';

export default function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Position vehicle categories on scroll down and show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  const vehicleSubTypes = useMemo(() => {
    const vehicleType = searchParams.get('vehicleType');
    return (
      vehicles.find((vehicle) => vehicle.title === vehicleType)?.subTypes || []
    );
  }, [searchParams]);

  return (
    <FilterProvider>
      <div
        className={cn(
          'transition-top sticky top-0 z-20 overflow-y-hidden duration-300 space-y-1.5 bg-muted dark:bg-black pb-1.5',
          {
            'top-[64px]': visible,
            'top-0': !visible,
          }
        )}
      >
        <VehicleTypeFilter />
        {vehicleSubTypes && vehicleSubTypes.length > 0 && (
          <div className="p-2 bg-background">
            <Container>
              <div className="flex gap-2">
                <VehicleSubTypeFilter />
              </div>
            </Container>
          </div>
        )}
      </div>
    </FilterProvider>
  );
}
