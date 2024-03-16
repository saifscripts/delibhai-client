import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Categories = ({ categories = [] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 py-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-8">
      {categories.map(({ id, icon, title, to }) => (
        <Link
          to={title}
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
        </Link>
      ))}
    </div>
  );
};

export default Categories;
