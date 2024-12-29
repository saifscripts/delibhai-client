import { Button } from '@/components/ui/button';
import { XIcon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export default function ClearValues({ field }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedValues = searchParams.get(field)?.split(',') || [];

  if (selectedValues.length === 0) {
    return <div />;
  }

  const handleClear = () => {
    const params = new URLSearchParams(searchParams);
    params.delete(field);
    setSearchParams(params, { replace: true });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-[2px] px-1.5 h-7"
      onClick={handleClear}
    >
      <XIcon />
      <span className="text-[10px]">ক্লিয়ার করুন</span>
    </Button>
  );
}
