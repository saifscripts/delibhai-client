const StatCard = ({ stat }) => {
  const { title, quantity } = stat;
  return (
    <div className="relative rounded-lg border border-[#dddddd] px-7 py-8 text-center">
      {/* Title and Description */}
      <h4 className="mb-3 text-5xl font-semibold">{quantity}</h4>
      <p className="text-xl text-[#7a7a7a]">{title}</p>
    </div>
  );
};

export default StatCard;
