export const EditOption = ({ icon, text, type, onChange, onClick }) => {
  return (
    <label
      className="flex gap-3 items-center hover:bg-[#ccc] active:bg-[#ccc] hover:cursor-pointer px-7 py-2"
      htmlFor={text}
    >
      <div className="w-10 aspect-square rounded-full bg-light flex justify-center items-center text-xl">
        {icon}
      </div>
      <input
        id={text}
        className="text-xl hidden"
        type={type}
        onChange={onChange}
        onClick={onClick}
        accept={type === "file" ? "image/png, image/gif, image/jpeg" : ""}
      />
      {text}
    </label>
  );
};
