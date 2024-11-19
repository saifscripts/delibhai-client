import { Link } from "react-router-dom";
import StatCard from "./StatCard";

const Stats = () => {
  const statsData = [
    {
      id: 1,
      title: "রেজিস্টার্ড কাস্টমার",
      quantity: "২০০০+",
    },
    {
      id: 2,
      title: "ডেলিভাই হিরো",
      quantity: "৫০০+",
    },
    {
      id: 3,
      title: "অর্ডার সম্পন্ন",
      quantity: "৩০০০+",
    },
    {
      id: 4,
      title: "গ্রাম/মহল্লা",
      quantity: "২০+",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[920px] px-6 text-center">
        {/* Section title */}
        <h2 className="mb-10 text-3xl font-semibold text-black sm:text-4xl md:text-5xl">
          আমাদের সম্পর্কে জানুন
        </h2>
        {/* Infos */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
        {/* More Button */}
        <Link to="/about-us" className="btn btn-primary mt-10 text-white">
          আরো জানুন
        </Link>
      </div>
    </section>
  );
};

export default Stats;
