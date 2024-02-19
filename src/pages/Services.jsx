import services from "../data/services";
import Categories from "../layouts/Categories";
import Container from "../layouts/Container";
import { Navbar } from "../layouts/Navbar/";
import Title from "../layouts/Title";

const Services = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <Navbar bgColor="secondary" />
      <Container>
        <Title color="white" title="ডেলিভাই সার্ভিস সমূহ" />
        <Categories categories={services} />
      </Container>
    </div>
  );
};

export default Services;
