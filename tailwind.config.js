/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '460px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      "3xl": "1900px",
    },
    extend: {
     colors: {
      primary:"#6fb72f",
      secondary:"#272535",
     },
     backgroundImage: {
      'about': "url('/assets/images/img_6.jpeg')",
    },
     fontFamily: {
      'Playfair': ['"Playfair Display"', 'serif'],
      'jost' : ['"Jost", sans-serif']
    },
    },
  },
  plugins: [],
}
