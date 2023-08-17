/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,html,tsx}",
  ],
  theme: {
    animation: {
      'spin-slow': 'spin 8s linear infinite',
    },
    
    extend: {
      /* lo aplico para llamar mis img bg es solo ejemplo*/
      backgroundImage: {
        "bg-header": "url('/bg_header.png')",
        "bg-body" : "url('/bg_page.png')",
        "bg-loader": "url('/r_m_portal.gif')"
      },
      keyframes:{
        "spin-slow": {
          "0%, 100%": { transform: 'rotate(360deg)' }
        }
      }
    },
    //colors:{},
    fontFamily: {
      "fira-code":["Fira Code", "monospace"]
    }
  },
  plugins: [
    require('tailwind-scrollbar')
    //require('tailwind-scrollbar-hide')
  ],
}

