import { useNavigate } from "react-router-dom";
import Grid from "../../../../components/grid";
import Section from "../../../../components/section/Section";
import SectionTitle from "../../../../components/section/SectionTitle";
import services from "../../../../data/services";
import Container from "../../../../layouts/Container";

export default function Services() {
  const navigate = useNavigate();
  const handleItemClick = (item) => {
    navigate(item.href);
  };

  return (
    <Section>
      <Container className="">
        <div className="mx-auto max-w-xl">
          <SectionTitle>ডেলিভাই সার্ভিস সমূহ</SectionTitle>
          <Grid items={services} onItemClick={handleItemClick} />
        </div>
      </Container>
    </Section>
  );
}
