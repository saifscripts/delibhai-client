import vehicles from "../../../../data/vehicles";
import cn from "../../../../lib/cn";
import { ScrollItem, ScrollMenu } from "../../../../lib/scrollable-menu";

function VehicleCategories({ vehicleType, setVehicleType }) {
  return (
    <div className="sticky top-16 bg-white sm:top-24">
      <ScrollMenu arrow className="gap-2">
        {vehicles.map(({ title, icon }) => (
          <ScrollItem
            key={title}
            onClick={() => setVehicleType(title)}
            className={cn(
              "h-24 w-28 rounded-lg border border-neutral px-3 py-1 hover:bg-neutral hover:bg-opacity-50 active:bg-secondary active:bg-opacity-30 sm:h-28 sm:w-32",
              {
                "bg-secondary bg-opacity-30 hover:bg-secondary":
                  vehicleType === title,
              },
            )}
          >
            <div className="h-16 w-full sm:h-20">
              <img src={icon} alt={title} className="aspect-video h-full" />
            </div>
            <p className="text-center text-base sm:text-lg">{title}</p>
          </ScrollItem>
        ))}
      </ScrollMenu>
    </div>
  );
}

export default VehicleCategories;
