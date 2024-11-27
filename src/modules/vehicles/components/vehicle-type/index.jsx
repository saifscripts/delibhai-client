import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Grid from "../../../../components/grid";
import { useGeolocation } from "../../../../contexts/location.context";
import vehicles from "../../../../data/vehicles";
import Container from "../../../../layouts/Container";

export default function VehicleType() {
  const navigate = useNavigate();
  const { error } = useGeolocation();

  const handleItemClick = (item) => {
    if (error) {
      toast.error(error);
    } else {
      navigate(`search?vehicleType=${item.title.split(" ").join("+")}`);
    }
  };

  return (
    <section className="bg-white py-4 sm:py-8">
      <Container className="">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 text-lg font-semibold text-[#717273] sm:mb-8 sm:text-center sm:text-4xl">
            গাড়ি নির্বাচন করুন<span className="sm:hidden">:</span>
          </h2>
          <Grid onItemClick={handleItemClick} items={vehicles} />
        </div>
      </Container>
    </section>
  );
}
