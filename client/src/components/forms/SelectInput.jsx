// eslint-disable-next-line react/prop-types
export default function SelectInput({ options = [], selected }) {
  return (
    <select className='w-full p-4 bg-transparent border border-grey-950 shadow mb-5'>
      <option selected>{selected}</option>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}
