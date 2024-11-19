import { Link } from "react-router-dom";
import services from "../../data/services";
import Container from "../../layouts/Container";
import { ScrollItem, ScrollMenu } from "../../lib/scrollable-menu";

export default function Services() {
  return (
    <section className="bg-white py-12">
      {/* Larger Screen */}
      <Container className="hidden sm:block">
        <h3 className="mb-5 text-center text-2xl text-primary md:text-3xl">
          সব সমাধান এক ক্লিকে
        </h3>
        <h2 className="mb-10 text-center text-3xl font-semibold text-black sm:text-4xl md:text-5xl">
          ডেলিভাই সার্ভিসসমূহ
        </h2>
        <ScrollMenu arrow className="gap-5">
          {services.map(({ id, title, icon, to }) => (
            <ScrollItem
              className="flex aspect-square w-60 items-center justify-center rounded-md border border-neutral transition-transform duration-300 hover:scale-105 hover:bg-neutral hover:bg-opacity-50"
              key={id}
            >
              <Link
                to={to}
                key={id}
                className="flex h-full w-full flex-col items-center justify-center gap-4 lg:gap-6"
              >
                <img
                  src={icon}
                  alt={title}
                  className="aspect-square w-16 sm:w-20 lg:w-24"
                />
                <p className="text-center text-xl sm:text-2xl">{title}</p>
              </Link>
            </ScrollItem>
          ))}
        </ScrollMenu>
      </Container>

      {/* Small Screen */}
      <Container className="sm:hidden">
        <div className="grid grid-cols-3 gap-4 py-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
          {services.map(({ id, icon, title, to }) => {
            return (
              <Link
                to={to}
                key={id}
                className="flex aspect-square items-center justify-center rounded-lg border border-gray-300 bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
                  <img
                    src={icon}
                    alt={title}
                    className="aspect-square w-16 sm:w-20 lg:w-24"
                  />
                  <p className="text-center text-xl text-gray-500 sm:text-2xl">
                    {title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
