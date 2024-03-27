export default function SelectField({
  label,
  disabled,
  fields,
  onChange,
  name,
}) {
  return (
    <div className="mb-1 mt-4">
      <label className="font-bold">{label}</label>
      <select
        name={name}
        defaultValue={fields?.find((field) => field.selected)?.value} // find the selected field value
        disabled={disabled}
        onChange={onChange}
        className="w-full border-b border-primary bg-transparent py-3"
      >
        <option>সিলেক্ট করুন</option>
        {fields?.map(({ value, title }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
}
