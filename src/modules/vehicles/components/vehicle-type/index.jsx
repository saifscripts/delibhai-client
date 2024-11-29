import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Grid from "../../../../components/grid";
import Section from "../../../../components/section/Section";
import SectionTitle from "../../../../components/section/SectionTitle";
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
    <Section>
      <Container className="">
        <div className="mx-auto max-w-xl">
          <SectionTitle>গাড়ি নির্বাচন করুন</SectionTitle>
          <Grid onItemClick={handleItemClick} items={vehicles} />
        </div>
      </Container>
    </Section>
  );
}
