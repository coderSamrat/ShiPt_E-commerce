/** @type {import('tailwindcss').Config} */
export default {
      content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
            extend: {
                  container:{
                        center: true,
                        padding: '16px',
                  },
                  boxShadow: {
                        '3xl': '0 0 3px 3px #29384a30',
                        '5xl': '0 0 0px 1px #29384a12'
                  },
                  fontFamily: {
                        Playfair: ["Playfair Display", 'serif']
                  }
            },
      },
      plugins: [],
}