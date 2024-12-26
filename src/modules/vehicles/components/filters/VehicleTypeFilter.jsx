import { ScrollItem, ScrollMenu } from '@/components/scrollable-menu';
import vehicles from '@/data/vehicles';
import Container from '@/layouts/Container';

import { cn } from '@/lib/utils';
import { useSearchParams } from 'react-router-dom';

export default function VehicleTypeFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vehicleType = searchParams.get('vehicleType');

  const handleChangeVehicleType = (vehicleType) => {
    if (vehicleType !== searchParams.get('vehicleType')) {
      setSearchParams({ vehicleType }, { replace: true });
    }
  };

  return (
    <div className="bg-background">
      <Container>
        <ScrollMenu arrow className="gap-2 py-2">
          {vehicles.map(({ title, icon }) => (
            <ScrollItem
              key={title}
              onClick={() => handleChangeVehicleType(title)}
              className={cn(
                'group flex aspect-square cursor-pointer flex-col items-center justify-between gap-1 rounded-lg border bg-muted p-1 hover:border-tone-600 hover:bg-tone-200 size-16',
                {
                  'bg-tone-200': vehicleType === title,
                }
              )}
            >
              <div className="flex h-[50%] w-full items-center justify-center">
                <img
                  src={icon}
                  alt={title}
                  className="h-full w-full object-scale-down object-center"
                />
              </div>
              <p className="text-center text-muted-foreground [text-wrap:nowrap] dark:group-hover:text-muted text-[12px]">
                {title}
              </p>
            </ScrollItem>
          ))}
        </ScrollMenu>
      </Container>
    </div>
  );
}
