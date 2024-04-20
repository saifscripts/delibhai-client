import { FiPlayCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import man from "./assets/man.png";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-neutral opacity-20"></div>
      <div className="relative z-20">
        <div className="container grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-16">
          <div className="my-5 text-center lg:text-left">
            <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-6xl sm:leading-tight xl:text-7xl xl:leading-tight">
              দেশের নাম্বার ওয়ান ডেলিভারি সার্ভিস
            </h1>
            <p className="mb-8 text-3xl text-accent">সব সমাধান এক ক্লিকে</p>
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row lg:justify-start">
              <Link to={"/registration"} className="btn btn-primary text-white">
                রেজিস্ট্রেশন করুন
              </Link>
              <Link
                to={"/"}
                className="btn flex items-center gap-1 border-primary bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-white"
              >
                <FiPlayCircle className="text-xl" />
                <span>ডেলিভাই কিভাবে কাজ করে</span>
              </Link>
            </div>
          </div>
          <div className="order-first flex items-end justify-center pt-10 lg:order-last lg:justify-start">
            <img src={man} alt="DeliBhai Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
