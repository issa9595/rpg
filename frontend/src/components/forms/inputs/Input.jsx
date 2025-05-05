function Input ({
  label,
  value,
  onChange,
  onChangeText,
  className = '',
  ...props
}) {
  const handleChange = (event) => {
    if (onChange) onChange(event)
    if (onChangeText) onChangeText(event.target.value)
  }

  return (
    <label className='flex flex-col space-y-1.5'>
      <span className='text-sm font-medium text-gray-700'>{label}</span>
      <input
        {...props}
        value={value}
        onChange={handleChange}
        className={`
          w-full px-3 py-2 
          bg-white border border-gray-300 rounded-lg
          text-gray-900 text-base
          placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500
          hover:border-gray-400
          transition-all duration-200
          ${className}
        `}
      />
    </label>
  )
}

export default Input
