import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AddValue } from './AddValue';
import ClearValues from './ClearValues';

export default function Filter({ field, label, values }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedValues = searchParams.get(field)?.split(',');
  const [value, setValue] = useState(undefined);

  useEffect(() => {
    if (searchParams.get(field)) {
      setValue(field);
    }
  }, [searchParams]);

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
    <Accordion type="single" collapsible value={value} onValueChange={setValue}>
      <AccordionItem value={field} className="w-[170px] border rounded-lg">
        <AccordionTrigger
          className={cn('px-2 py-1.5 hover:no-underline', {
            'rounded-lg': value !== field,
            'border-b': value === field,
          })}
        >
          <p className="text-sm">{label}</p>
        </AccordionTrigger>
        <AccordionContent className="px-2 py-1.5 overflow-visible">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 flex-wrap w-full">
              {searchParams
                .get(field)
                ?.split(',')
                .map((value) => (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-primary-500/20 text-primary-700 rounded-full px-2 h-6"
                    onClick={() => handleRemoveValue(value)}
                  >
                    <span className="text-xs">{value}</span>
                    <XIcon className="size-2" />
                  </Button>
                ))}
            </div>
            <div className="flex justify-between gap-[2px]">
              <ClearValues field={field} />
              <AddValue field={field} values={values} label={label} />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
