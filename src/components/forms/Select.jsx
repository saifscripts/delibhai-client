// eslint-disable-next-line react/prop-types
export default function Select({ options = [], selected }) {
  return (
    <select className="border-grey-950 mb-5 w-full border bg-transparent p-4 shadow">
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
