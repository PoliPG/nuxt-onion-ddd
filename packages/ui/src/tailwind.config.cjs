/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        green: {
          50: '#d6ffee',
          100: '#acffdd',
          200: '#83ffcc',
          300: '#30ffaa',
          400: '#00dc82',
          500: '#00bd6f',
          600: '#009d5d',
          700: '#007e4a',
          800: '#005e38',
          900: '#003f25'
        }
      }
    }
  },
  plugins: [],
  // Whitelisting some classes to avoid content purge
  safelist: [
    'whitelisted',
    {
      pattern: /bg-(red|green|blue)-(100|200|300)/
    }
  ]
}
