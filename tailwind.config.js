/** @type {import('tailwindcss')",.Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cta-text": "hsl(356, 100%, 66%)",
        "cta-hover-background": "hsl(355, 100%, 74%)",
        headings: "hsl(208, 49%, 24%)",

        text: "hsl(0, 0%, 100%)",
        "footer-text": "hsl(240, 2%, 79%)",
        "body-copy": "hsl(207, 13%, 34%)",
        "footer-background": "hsl(240, 10%, 16%)",
        "very-light-red": "hsl(13, 100%, 72%)",
        "light-red": "hsl(353, 100%, 62%)",

        "very-dark-gray-blue": "hsl(237, 17%, 21%)",
        "very-dark-desaturated-blue": "hsl(237, 23%, 32%)",
      },
    },
  },
  plugins: [],
};
