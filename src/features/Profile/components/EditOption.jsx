export default function EditOption({ icon, text, type, ...restProps }) {
  return (
    <label
      className="flex items-center gap-3 px-7 py-2 hover:cursor-pointer hover:bg-[#ccc] active:bg-[#ccc]"
      htmlFor={text}
    >
      <div className="bg-light flex aspect-square w-10 items-center justify-center rounded-full text-xl">
        {icon}
      </div>
      <input
        id={text}
        className="hidden text-xl"
        type={type}
        accept={type === "file" ? "image/png, image/gif, image/jpeg" : ""}
        {...restProps}
      />
      {text}
    </label>
  );
}
