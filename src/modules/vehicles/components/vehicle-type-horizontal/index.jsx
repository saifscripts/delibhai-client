import { ScrollItem, ScrollMenu } from '@/components/scrollable-menu';
import vehicles from '@/data/vehicles';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function VehicleTypeHorizontal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vehicleType = searchParams.get('vehicleType');
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

  return (
    <div
      className={cn(
        'transition-top sticky top-0 z-20 overflow-y-hidden duration-300',
        {
          'top-[64px]': visible,
          'top-0': !visible,
        }
      )}
    >
      <ScrollMenu arrow className="gap-3 bg-background">
        {vehicles.map(({ title, icon }) => (
          <ScrollItem
            key={title}
            onClick={() =>
              setSearchParams({ vehicleType: title }, { replace: true })
            }
            className={cn(
              'group flex aspect-square cursor-pointer flex-col items-center justify-between gap-2 rounded-lg border bg-muted px-2 py-2 hover:border-tone-600 hover:bg-tone-200 sm:gap-4 sm:px-3 sm:py-2 size-20 sm:size-28 md:size-32',
              {
                'bg-tone-200': vehicleType === title,
              }
            )}
          >
            <div className="flex h-[60%] w-full items-center justify-center">
              <img
                src={icon}
                alt={title}
                className="h-full w-full object-scale-down object-center"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground [text-wrap:nowrap]  dark:group-hover:text-muted sm:text-xl">
              {title}
            </p>
          </ScrollItem>
        ))}
      </ScrollMenu>
    </div>
  );
}
