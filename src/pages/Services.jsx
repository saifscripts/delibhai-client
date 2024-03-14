import services from "../data/services";
import Container from "../layouts/Container";
import { Navbar } from "../layouts/Navbar/";
import Title from "../layouts/Title";

const host = location.host;

const Services = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <Navbar bgColor="secondary" />
      <Container>
        <Title color="white" title="ডেলিভাই সার্ভিস সমূহ" />
        {/* Categories */}
        <div className="grid grid-cols-2 gap-4 py-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-8">
          {services.map(({ id, icon, title, subdomain }) => (
            <a
              href={`https://${subdomain}.${host}`}
              key={id}
              className="bg-white rounded-lg aspect-square flex justify-center items-center shadow-md"
            >
              <div className="flex flex-col gap-4 lg:gap-6 justify-center items-center">
                <img
                  src={icon}
                  alt={title}
                  className="w-16 sm:w-20 lg:w-24 aspect-square"
                />
                <p className="text-xl sm:text-2xl text-center">{title}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
