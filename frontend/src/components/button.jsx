function Button ({ children, variant = 'default', ...props }) {
  let _color = ''

  switch (variant) {
    case 'success':
      _color = 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg'
      break
    case 'default':
      _color = 'bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg'
      break
    case 'danger':
      _color = 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'
      break
    case 'warning':
      _color = 'bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg'
      break
    case 'info':
      _color = 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg'
      break
  }
  return (
    <button
      className={`${_color} px-4 py-2 rounded-lg cursor-pointer shadow-md transition-all duration-300`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
