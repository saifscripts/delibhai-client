import { useNavigate } from "react-router-dom";
import Grid from "../../../../components/grid";
import services from "../../../../data/services";
import Container from "../../../../layouts/Container";

export default function Services() {
  const navigate = useNavigate();
  const handleItemClick = (item) => {
    navigate(item.href);
  };

  return (
    <section className="bg-white py-4 sm:py-8">
      <Container className="">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 text-lg font-semibold text-[#717273] sm:mb-8 sm:text-center sm:text-4xl">
            ডেলিভাই সার্ভিস সমূহ<span className="sm:hidden">:</span>
          </h2>
          <Grid items={services} onItemClick={handleItemClick} />
        </div>
      </Container>
    </section>
  );
}
