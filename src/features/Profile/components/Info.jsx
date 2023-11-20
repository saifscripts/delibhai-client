export const Info = ({ info, label, icon }) => {
  return (
    <div className="flex items-start gap-3 border-b border-light py-2">
      <div className="w-12 aspect-square flex-shrink-0 rounded-full bg-light flex justify-center items-center">
        <img src={icon} alt={label} className="w-full" />
      </div>

      <div className="text-medium">
        {Array.isArray(info) ? (
          info.map((info, index) => (
            <p key={index} className="font-bold text-lg">
              {info}
            </p>
          ))
        ) : (
          <p className={`font-bold text-lg ${info || "text-red-300"}`}>
            {info || "তথ্য প্রদান করুন"}
          </p>
        )}
        <p>{label}</p>
      </div>
    </div>
  );
};
