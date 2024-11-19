import { Link } from "react-router-dom";
import earnings from "./assets/earnings.svg";

const EarningsBanner = () => {
  return (
    <section className="bg-white py-12">
      {/* Section Title */}
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="heading mb-3 text-3xl font-semibold text-black sm:text-4xl md:text-5xl">
          বাইক, গাড়ি অথবা অটো রিকশা এর মাধ্যমে আয় করুন
        </h2>
        <Link to="/" className="btn btn-primary mb-10 text-white">
          আয় করুন
        </Link>
      </div>

      {/* Image */}
      <div className="">
        <img src={earnings} className="w-full" alt="" />
      </div>
    </section>
  );
};

export default EarningsBanner;
