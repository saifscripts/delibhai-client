import delivery1 from "./assets/delivery1.jpg";
import delivery2 from "./assets/delivery2.jpg";
import delivery3 from "./assets/delivery3.jpg";
import delivery4 from "./assets/delivery4.jpg";

const DeliveryBanner = () => {
  return (
    <section className="hidden bg-white py-12 sm:block">
      {/* Section Title */}
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="heading mb-10 text-center text-3xl font-semibold text-black sm:text-4xl md:text-5xl">
          আমাদের সাথে শুরু হোক আপনার ডিজিটাল লাইফের পথচলা
        </h2>
      </div>
      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <img src={delivery1} alt="" />
        <img src={delivery2} alt="" />
        <img src={delivery3} alt="" />
        <img src={delivery4} alt="" />
      </div>
    </section>
  );
};

export default DeliveryBanner;
