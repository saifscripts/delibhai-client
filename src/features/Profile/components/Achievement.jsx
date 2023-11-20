export const Achievement = ({ stat, title, icon }) => {
  return (
    <div className="text-center leading-4">
      <p className="font-bold flex justify-center gap-1">
        {stat} {icon}
      </p>
      <p>{title}</p>
    </div>
  );
};
