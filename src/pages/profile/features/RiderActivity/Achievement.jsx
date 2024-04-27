export default function Achievement({ stat, title, icon }) {
  return (
    <div className="text-center leading-4">
      <p className="flex justify-center gap-1 font-bold">
        {stat} {icon}
      </p>
      <p>{title}</p>
    </div>
  );
}
