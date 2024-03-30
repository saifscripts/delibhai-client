export default function SelectField({
  disabled,
  fields,
  onChange,
  defaultValue,
}) {
  return (
    <select
      name="ward"
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onChange}
      className="w-full rounded-md bg-primary bg-opacity-10 px-4 py-[6px]"
    >
      <option value="all">সকল ওয়ার্ড</option>
      {fields?.map(({ _id, title }) => (
        <option key={_id} value={_id}>
          {title}
        </option>
      ))}
    </select>
  );
}
