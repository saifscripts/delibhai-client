// eslint-disable-next-line react/prop-types
export default function Select({ options = [], selected }) {
  return (
    <select className="w-full p-4 bg-transparent border border-grey-950 shadow mb-5">
      <option selected>{selected}</option>
      {options.map(({ title, icon }) => (
        <option key={title}>
          <img src={icon} alt="" />
          {title}
        </option>
      ))}
    </select>
  );
}
