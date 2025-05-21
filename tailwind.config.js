/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,html,js}"],
  theme: {
    extend: {
      animation:{
        'gradient-x':'gradient-x 2s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes:{
        'gradient-x':{
          '0%':{backgroundPosition:'0% 50%'},
          '50%':{backgroundPosition:'100% 50%'},
          '100%':{backgroundPosition:'0% 50%'},
        },
      },
    },
  },
  plugins: [],
}