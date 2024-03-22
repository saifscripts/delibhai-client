export const Field = ({ value, label, icon }) => {
  return (
    <div className="border-light flex items-start gap-3 border-b py-2">
      <div className="bg-light flex aspect-square w-12 flex-shrink-0 items-center justify-center rounded-full">
        <img src={icon} alt={label} className="w-full" />
      </div>

      <div className="text-medium">
        {Array.isArray(value) ? (
          value.map((value, index) => (
            <p key={index} className="text-lg font-bold">
              {value}
            </p>
          ))
        ) : (
          <p className={`text-lg font-bold ${value || "text-red-300"}`}>
            {value || "তথ্য প্রদান করুন"}
          </p>
        )}
        <p>{label}</p>
      </div>
    </div>
  );
};
