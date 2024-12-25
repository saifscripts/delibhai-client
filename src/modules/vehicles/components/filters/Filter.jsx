import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { XIcon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { AddValue } from './AddValue';
import ClearValues from './ClearValues';

export default function Filter({ field, label, values }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedValues = searchParams.get(field)?.split(',');

  const handleRemoveValue = (value) => {
    const params = new URLSearchParams(searchParams);
    const newValues = selectedValues.filter((item) => item !== value);

    if (newValues.length === 0) {
      params.delete(field);
      setSearchParams(params, { replace: true });
    } else {
      params.set(field, newValues.join(','));
      setSearchParams(params, { replace: true });
    }
  };

  return (
    <Accordion type="multiple">
      <AccordionItem value={field} className="w-[200px] border rounded-lg">
        <AccordionTrigger className="p-2 hover:no-underline border-b rounded-lg">
          <p className="font-bold">{label}</p>
        </AccordionTrigger>
        <AccordionContent className="p-2 overflow-visible">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 flex-wrap w-full">
              {searchParams
                .get(field)
                ?.split(',')
                .map((subType) => (
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-primary-50 text-primary-700 rounded-full px-2 h-6"
                    onClick={() => handleRemoveValue(subType)}
                  >
                    {subType}
                    <XIcon className="size-2" />
                  </Button>
                ))}
            </div>
            <div className="flex justify-between gap-1">
              <ClearValues field={field} />
              <AddValue field={field} values={values} label={label} />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
