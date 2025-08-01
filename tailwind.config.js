module.exports = {
  content: [
    "./pages//*.{js,jsx}",
    "./components//*.{js,jsx}",
    "./app//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        berkshire: ['var(--font-berkshire)'],
      },
      colors: {
        orange: '#ff914d',     // ganti sesuai warna kamu
        green: '#7ed957',
        blue: '#0c93b8',
        brown: '#8c756a'
      },
    },
  },
  plugins: [],
}