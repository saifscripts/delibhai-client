import vehicles from "../../../../data/vehicles";
import cn from "../../../../lib/cn";
import { ScrollItem, ScrollMenu } from "../../../../lib/scrollable-menu";

function VehicleCategories({ vehicleType, setVehicleType }) {
  return (
    <ScrollMenu arrow>
      {vehicles.map(({ title, icon }) => (
        <ScrollItem
          key={title}
          onClick={() => setVehicleType(title)}
          className={cn(
            "flex aspect-square w-24 flex-col items-center justify-center gap-3 rounded-lg p-3 shadow-md sm:w-32",
            { "bg-secondary bg-opacity-30": vehicleType === title },
          )}
        >
          <img src={icon} alt={title} className="aspect-square w-2/3" />
          <p className="text-center text-base sm:text-xl">{title}</p>
        </ScrollItem>
      ))}
    </ScrollMenu>
  );
}

export default VehicleCategories;
