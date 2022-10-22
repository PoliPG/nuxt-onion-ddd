/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {},
  plugins: [],
  // Whitelisting some classes to avoid content purge
  safelist: [
    'whitelisted',
    {
      pattern: /bg-(red|green|blue)-(100|200|300)/
    }
  ]
}
