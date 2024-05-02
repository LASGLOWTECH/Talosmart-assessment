/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        darkBlue:'#192244',
        darkestBlue:'#0d233b',
        darksBlue:'#1d2b36',
        Armygreen:'#233028',
        Lemongreen:'#549E39',
        grey: '#b2b2b2',
        lightGreen:'#248451',
        lighterGreen:'#106236',
        greyBlack:'#181B38',
        grey:'#fafafa',
        darkGreen:'#00d3ac',
        lightGreen:'#acfce3',
        purpleBlue:'#6945d8',

       
      }
    
      
    },
  
  },
  plugins: [],
}
