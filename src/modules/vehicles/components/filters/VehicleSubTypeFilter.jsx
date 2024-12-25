import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import vehicles from '@/data/vehicles';
import { XIcon } from 'lucide-react';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AddVehicleSubType } from './AddVehicleSubType';
import ClearVehicleSubType from './ClearVehicleSubType';

export default function VehicleSubTypeFilter() {
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

  const selectedVehicleSubTypes = searchParams
    .get('vehicleSubType')
    ?.split(',');

  const handleRemoveVehicleSubType = (subType) => {
    const newVehicleSubType = selectedVehicleSubTypes.filter(
      (item) => item !== subType
    );

    if (newVehicleSubType.length === 0) {
      setSearchParams(
        {
          vehicleType: searchParams.get('vehicleType'),
        },
        { replace: true }
      );
    } else {
      setSearchParams(
        {
          vehicleSubType: newVehicleSubType.join(','),
          vehicleType: searchParams.get('vehicleType'),
        },
        { replace: true }
      );
    }
  };

  return (
    <Accordion type="multiple">
      <AccordionItem
        value="vehicleSubType"
        className="w-[200px] border rounded-lg"
      >
        <AccordionTrigger className="p-2 hover:no-underline border-b rounded-lg">
          <p className="font-bold">গাড়ির ধরণ</p>
        </AccordionTrigger>
        <AccordionContent className="p-2 overflow-visible">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 flex-wrap w-full">
              {searchParams
                .get('vehicleSubType')
                ?.split(',')
                .map((subType) => (
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-primary-50 text-primary-700 rounded-full px-2 h-6"
                    onClick={() => handleRemoveVehicleSubType(subType)}
                  >
                    {subType}
                    <XIcon className="size-2" />
                  </Button>
                ))}
            </div>
            <div className="flex justify-between gap-1">
              <ClearVehicleSubType />
              <AddVehicleSubType />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
