

export default function InputForm({
  error,
  handleChange,
  value,
  placeholder,
  type = "text",
  id,
}
) {
  return (
    <div>
      <input
        className=" bg-[#394050] text-white rounded-sm h-12 w-6/6 text-md p-4 mt-6 outline-0"
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <p className="text-xs text-red-600">{error}</p>
    </div>
  )
}
