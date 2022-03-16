module.exports = {
  content: [],
  purge: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "60%": "#79b4b7",
        "30%": "#f3fbf3",
        "accCol-A": "#f8f0df",
        "accCol-B": "#9d9d9d",
      },
    },
  },
  plugins: [],
};
