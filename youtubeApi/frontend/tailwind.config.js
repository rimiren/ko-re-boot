module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    'bg-blue-500', 'bg-blue-600', 'bg-blue-700',
    'text-white', 'text-black',
    'bg-gray-100', 'bg-gray-200',
    // 추가적인 클래스들
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
