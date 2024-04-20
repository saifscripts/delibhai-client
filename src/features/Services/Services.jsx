import services from "../../data/services";
import Container from "../../layouts/Container";
import { ScrollItem, ScrollMenu } from "../../lib/scrollable-menu";

const { host, protocol } = window.location;

const Services = () => {
  return (
    <section className="my-20">
      <Container>
        {/* Section Title */}
        <h3 className="mb-5 text-center text-2xl text-primary md:text-3xl">
          সব সমাধান এক ক্লিকে
        </h3>
        <h2 className="mb-10 text-center text-3xl font-semibold text-black sm:text-4xl md:text-5xl">
          ডেলিভাই সার্ভিসসমূহ
        </h2>
        <ScrollMenu arrow className="gap-10">
          {services.map(({ id, title, icon, subdomain }) => (
            <ScrollItem
              className="flex aspect-square w-60 items-center justify-center rounded-md p-5 shadow-lg"
              key={id}
            >
              <a
                href={`${protocol}//${subdomain}.${host}`}
                key={id}
                className="flex flex-col items-center justify-center gap-4 lg:gap-6"
              >
                <img
                  src={icon}
                  alt={title}
                  className="aspect-square w-16 sm:w-20 lg:w-24"
                />
                <p className="text-center text-xl sm:text-2xl">{title}</p>
              </a>
            </ScrollItem>
          ))}
        </ScrollMenu>
      </Container>
    </section>
  );
};

export default Services;
