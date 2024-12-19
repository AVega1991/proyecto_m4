export default function FormInput({
  name,
  label,
  type,
  value,
  onChange,
  placeholder,
}: {
  name: string;
  label: string;
  type: string;
  value: any;
  onChange: (e: any) => void;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-black text-sm font-semibold">
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-[20em] h-12 rounded-xl text-black pl-4"
        placeholder={placeholder}
      />
    </div>
  );
}
