/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.900","currentColor"),

    }),
    extend: {},
    container: {
      center:true,
      screens:{
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1300px",
      },
    },
  },
  plugins: [],
}

