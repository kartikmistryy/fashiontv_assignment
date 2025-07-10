/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Fragment'],
        subheadingSerif: ['FragmentSerif'],
        headingCursive: ['PalaceScript'],
        body: ['Aeonic'],
        bodyHeading: ['AeonicBold']
      }
    },
  },
  plugins: [],
}

