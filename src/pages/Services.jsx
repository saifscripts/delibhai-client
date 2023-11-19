import services from "../data/services";
import Categories from "../layouts/Categories";
import { Navbar } from "../layouts/Navbar/";
import PageContainer from "../layouts/PageContainer";
import Title from "../layouts/Title";

const Services = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <Navbar bgColor="secondary" />
      <PageContainer>
        <Title color="white" title="ডেলিভাই সার্ভিস সমূহ" />
        <Categories categories={services} />
      </PageContainer>
    </div>
  );
};

export default Services;
