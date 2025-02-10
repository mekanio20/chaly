/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        fira_sans: ['Fira Sans', 'sans-serif'],
      },
      colors: {
        m_gray: {
          100: '#262626',
        },
        m_blue: {
          100: '#133e70'
        },
        m_red: {
          100: '#D7182A'
        }
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}