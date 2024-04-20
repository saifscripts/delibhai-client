import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, title, description, image } = service;

  return (
    <div className="mb-16 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-0">
      <div
        className={`${
          id % 2 === 1 ? "md:mr-20" : "md:ml-20"
        } text-center md:text-left`}
      >
        <h2 className="mb-5 text-5xl font-semibold leading-tight">{title}</h2>
        <p className="mb-6 text-base text-[#5c5c5c]">{description}</p>
        <Link to={"/"} className="btn btn-primary text-white">
          অর্ডার করুন
        </Link>
      </div>
      <div className={`${id % 2 === 1 && "md:order-last"} order-first`}>
        <img src={image} className="mx-auto w-3/4 md:w-full" alt="" />
      </div>
    </div>
  );
};

export default Service;
