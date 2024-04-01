export default function SelectField({
  disabled,
  fields,
  // onChange,
  defaultValue,
  handlers,
}) {
  return (
    <select
      name="ward"
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={handlers.handleWardChange}
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
