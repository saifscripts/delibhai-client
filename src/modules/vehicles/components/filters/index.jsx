import { ScrollItem, ScrollMenu } from '@/components/scrollable-menu';
import vehicles from '@/data/vehicles';
import Container from '@/layouts/Container';
import { cn } from '@/lib/utils';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Filter from './Filter';
import VehicleTypeFilter from './VehicleTypeFilter';

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

  const vehicleSubTypeFilterValues = useMemo(() => {
    const vehicleType = searchParams.get('vehicleType');
    const vehicleSubType =
      searchParams.get('vehicleSubType')?.split?.(',') || [];

    return (
      vehicles.find((vehicle) => vehicle.title === vehicleType)?.subTypes || []
    ).map((subType) => subType.title);
  }, [searchParams]);

  const rentTypeFilterValues = ['লোকাল', 'রিজার্ভ', 'কন্টাক্ট'];

  return (
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
      <div className="bg-background">
        <Container>
          <ScrollMenu className="gap-2 py-2">
            {vehicleSubTypes && vehicleSubTypes.length > 0 && (
              <ScrollItem>
                <Filter
                  field="vehicleSubType"
                  values={vehicleSubTypeFilterValues}
                  label="গাড়ির ধরণ"
                />
              </ScrollItem>
            )}
            <ScrollItem>
              <Filter
                field="rentType"
                values={rentTypeFilterValues}
                label="ভাড়ার ধরণ"
              />
            </ScrollItem>
          </ScrollMenu>
        </Container>
      </div>
    </div>
  );
}
