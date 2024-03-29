export default function SelectField({ disabled, fields, onChange, value }) {
  return (
    <select
      name="ward"
      defaultValue={value}
      disabled={disabled}
      onChange={onChange}
      className="w-full rounded-md bg-primary bg-opacity-10 px-4 py-[6px]"
    >
      <option value="all">সকল ওয়ার্ড</option>
      {fields?.map(({ value, title }) => (
        <option key={value} value={value}>
          {title}
        </option>
      ))}
    </select>
  );
}
