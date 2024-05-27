import { Link } from "react-router-dom";
import services from "../../data/services";
import Container from "../../layouts/Container";

const MobileHome = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Container>
        {/* <Title color="white" title="ডেলিভাই সার্ভিস সমূহ" /> */}
        {/* Categories */}
        <div className="grid grid-cols-2 gap-4 py-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
          {services.map(({ id, icon, title, to }) => (
            <Link
              to={to}
              key={id}
              className="flex aspect-square items-center justify-center rounded-lg bg-white shadow-md"
            >
              <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
                <img
                  src={icon}
                  alt={title}
                  className="aspect-square w-16 sm:w-20 lg:w-24"
                />
                <p className="text-center text-xl sm:text-2xl">{title}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MobileHome;
