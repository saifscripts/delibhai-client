export default function SelectField({
  label,
  disabled,
  fields,
  onChange,
  name,
  defaultValue,
}) {
  return (
    <div className="mb-1 mt-4">
      <label className="font-bold">{label}</label>
      <select
        name={name}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        className="w-full border-b border-primary bg-transparent py-3"
      >
        <option>সিলেক্ট করুন</option>
        {fields?.map(({ _id, title }) => (
          <option key={_id} value={_id}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
}
