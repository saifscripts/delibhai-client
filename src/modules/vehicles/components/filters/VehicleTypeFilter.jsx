import { ScrollItem, ScrollMenu } from '@/components/scrollable-menu';
import vehicles from '@/data/vehicles';
import Container from '@/layouts/Container';

import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function VehicleTypeFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vehicleType = searchParams.get('vehicleType');
  const ref = useRef(null);

  const handleChangeVehicleType = (vehicleType) => {
    if (vehicleType !== searchParams.get('vehicleType')) {
      setSearchParams({ vehicleType }, { replace: true });
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, [vehicleType]);

  return (
    <div className="bg-background">
      <Container>
        <ScrollMenu arrow className="gap-2 py-2">
          {vehicles.map(({ title, icon }) => (
            <ScrollItem
              key={title}
              onClick={() => handleChangeVehicleType(title)}
              className={cn(
                'group flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border bg-muted p-2 hover:border-tone-600 hover:bg-tone-200 size-16 will-change-contents',
                {
                  'bg-tone-200': vehicleType === title,
                }
              )}
            >
              <div
                className="flex h-full w-full items-center justify-center"
                ref={vehicleType === title ? ref : null}
              >
                <img
                  src={icon}
                  alt={title}
                  className="h-full w-full object-contain object-center"
                />
              </div>
              {/* <p className="text-center text-muted-foreground [text-wrap:nowrap] dark:group-hover:text-muted text-[12px]">
                {title}
              </p> */}
            </ScrollItem>
          ))}
        </ScrollMenu>
      </Container>
    </div>
  );
}
