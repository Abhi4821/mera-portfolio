// export default {
//   safelist: [
//     'text-sm', 'font-medium', 'text-indigo-500',
//     'text-gray-400', 'text-white', 'text-gray-600',
//     'text-gray-900', 'hidden', 'md:flex', 'md:hidden',
//     'bg-gray-950', 'bg-white', 'bg-gray-800', 'bg-gray-100',
//   ]
// }

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    'text-sm', 'font-medium', 'text-indigo-500',
    'text-gray-400', 'text-white', 'text-gray-600',
    'text-gray-900', 'hidden', 'md:flex', 'md:hidden',
    'bg-gray-950', 'bg-white', 'bg-gray-800', 'bg-gray-100',
    'text-yellow-400', 'text-indigo-600', 'backdrop-blur-md',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}