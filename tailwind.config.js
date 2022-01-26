module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {

        borderGray: "#e0e0e2",
        textGray: "#616161",
        Gray2: "#a1a3a8",
        textblack: "#515151",
        textBlack2: "#424750",
        textBlack3: "#232933",
        customRed: "#ef394e"

      },
      keyframes: {
        barFill: {
          '0%': {
            width: "0"
          },
          'to': {
            width: "100%"
          },
        }
      },
      animation: {
        'barFill': 'barFill 7s cubic-bezier(.17,.67,.71,.99) infinite',

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
