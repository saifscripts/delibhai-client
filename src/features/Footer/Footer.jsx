import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="hidden sm:block">
      {/* First Part */}
      <div className="bg-black text-white">
        <div className="footer mx-auto max-w-4xl p-10">
          <div>
            <span className="mb-3 text-2xl font-semibold text-white">
              ডেলিভাই প্লাটফর্ম
            </span>
            <Link to={"/"} className="link-hover link text-base">
              ডেলিভাই সম্পর্কে
            </Link>
            <Link to={"/"} className="link-hover link text-base">
              শর্তাবলী
            </Link>
            <Link to={"/"} className="link-hover link text-base">
              গোপনীয়তা নীতি
            </Link>
          </div>
          <div>
            <span className="mb-3 text-2xl font-semibold text-white">
              আয় করুন
            </span>
            <Link to={"/"} className="link-hover link text-base">
              বাইক দিয়ে
            </Link>
            <Link to={"/"} className="link-hover link text-base">
              অটো রিকশা দিয়ে
            </Link>
            <Link to={"/"} className="link-hover link text-base">
              গাড়ী দিয়ে
            </Link>
          </div>
          <div>
            <span className="mb-3 text-2xl font-semibold text-white">
              হেল্প
            </span>
            <Link to={"/"} className="link-hover link text-base">
              সাপোর্ট সেন্টার
            </Link>
            <Link to={"/"} className="link-hover link text-base">
              হেল্প লাইন: 01823540325
            </Link>
            <Link to={"/"} className="link-hover link text-base">
              অন্যান্য
            </Link>
          </div>
          <div>
            <span className="mb-3 text-2xl font-semibold text-white">
              সোশাল মিডিয়া
            </span>
            <Link to={"/"} className="link-hover link text-base">
              ফেইসবুক গ্রুপ
            </Link>
            <Link to={"/"} className="link-hover link text-base">
              ফেইসবুক পেইজ
            </Link>
            <Link to={"/"} className="link-hover link text-base">
              ইউটিউব
            </Link>
          </div>
        </div>
      </div>

      {/* Second Part */}
      <div className="footer mx-auto max-w-4xl items-center px-10 py-5 text-black">
        <div className="grid-flow-col items-center">
          <p className="text-xl">
            © {new Date().getFullYear()} Delibhai. All Right Reserved.
          </p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"></div>
      </div>
    </footer>
  );
};

export default Footer;
