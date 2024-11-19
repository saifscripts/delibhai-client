import Step from "./Step";

const OrderProcess = () => {
  const steps = [
    {
      id: 1,
      title: "আপনার পন্য অর্ডার করুন",
      description:
        "আপনার পছন্দের পন্যটি অর্ডার করুন যেখান থেকে খুশি সেখান থেকে",
    },
    {
      id: 2,
      title: "আপনার পন্য অর্ডার করুন",
      description:
        "আপনার পছন্দের পন্যটি অর্ডার করুন যেখান থেকে খুশি সেখান থেকে",
    },
    {
      id: 3,
      title: "আপনার পন্য অর্ডার করুন",
      description:
        "আপনার পছন্দের পন্যটি অর্ডার করুন যেখান থেকে খুশি সেখান থেকে",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[920px] px-6">
        {/* Section Title */}
        <h3 className="mb-5 text-center text-2xl text-primary md:text-3xl">
          ডেলিভাই সার্ভিসের মাধ্যমে
        </h3>
        <h2 className="mb-10 text-center text-3xl font-semibold text-black sm:text-4xl md:text-5xl">
          মাত্র 30 মিনিটে অর্ডার ডেলিভারি
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {steps.map((step) => (
            <Step key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
