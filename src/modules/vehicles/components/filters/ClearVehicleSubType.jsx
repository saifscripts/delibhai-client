import { Button } from '@/components/ui/button';
import { XIcon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export default function ClearVehicleSubType() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedVehicleSubTypes =
    searchParams.get('vehicleSubType')?.split(',') || [];

  if (selectedVehicleSubTypes.length === 0) {
    return <div />;
  }

  const handleClear = () => {
    setSearchParams(
      { vehicleType: searchParams.get('vehicleType') },
      { replace: true }
    );
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-1 px-2 h-8"
      onClick={handleClear}
    >
      <XIcon className="size-1" />
      <p className="text-xs">ক্লিয়ার করুন</p>
    </Button>
  );
}
