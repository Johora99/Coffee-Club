/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Charcoal:'rgb(36, 34, 34)',
        DesertSand:'rgb(227, 181, 119)',
        Ivory:'rgb(236, 234, 227)',
        Mahogany:'rgb(51, 26, 21)',
        Ebony:'rgb(27, 26, 26)',
        Gunmetal:'rgb(55, 65, 81)',
        Eggshell:'rgb(244, 243, 240)',
        Tan:'rgb(210, 180, 140)',
        Alabaster:'rgb(245, 244, 241)',
        Graphite:'rgb(92, 91, 91)',
        TanTwo:'rgb(210, 180, 140)',
        AshGray:'rgb(60, 57, 59)',
        CoralRed:'rgb(234, 71, 68)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

