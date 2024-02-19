export const Field = ({ value, label, icon }) => {
  return (
    <div className="flex items-start gap-3 border-b border-light py-2">
      <div className="w-12 aspect-square flex-shrink-0 rounded-full bg-light flex justify-center items-center">
        <img src={icon} alt={label} className="w-full" />
      </div>

      <div className="text-medium">
        {Array.isArray(value) ? (
          value.map((value, index) => (
            <p key={index} className="font-bold text-lg">
              {value}
            </p>
          ))
        ) : (
          <p className={`font-bold text-lg ${value || "text-red-300"}`}>
            {value || "তথ্য প্রদান করুন"}
          </p>
        )}
        <p>{label}</p>
      </div>
    </div>
  );
};
