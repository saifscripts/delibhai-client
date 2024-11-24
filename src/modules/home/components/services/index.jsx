import { Link } from "react-router-dom";
import services from "../../../../data/services";
import Container from "../../../../layouts/Container";

export default function Services() {
  return (
    <section className="bg-white py-4 sm:py-8">
      <Container className="">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 text-2xl font-semibold text-[#717273] sm:mb-8 sm:text-center sm:text-4xl">
            ডেলিভাই সার্ভিস সমূহ
          </h2>
          <div className="xs:gap-4 tn:px-5 grid grid-cols-3 gap-2 px-2">
            {services.map(({ id, icon, title, to }) => {
              return (
                <Link
                  to={to}
                  key={id}
                  className="flex aspect-square flex-col items-center justify-center gap-2 rounded-lg border border-[#D3D3D4] bg-[#F5F6F6] px-1 py-2 hover:border-[#00E7AD] hover:bg-[#8AFFE1] sm:gap-4"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="aspect-square w-[60%]"
                  />
                  <p className="text-center text-sm text-gray-500 sm:text-2xl">
                    {title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
