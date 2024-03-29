/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundColor : {
        primary: 'var(--color--bg--primary)',
        secondary : 'var(--color--bg-seccondary)',
        button : 'var(--color-bg-button)',
      },
      textcolor:{
        accent : 'var(--color-text-secondary)',
        promary : 'var(--color-text-primary)',
        secondary : 'var(--color-text-secondary)',
        btnText : 'var(--color-bg-secondary)', 
      },
      borderColor : {
        primary : 'var(--color-bg-primary)',
        secondary : 'var(--color-bg-secondary)',
        input : 'var(--color-bg-input)',
        accent : 'var(--color-text-accent)',
      }
    },
  },
  plugins: [],
}
