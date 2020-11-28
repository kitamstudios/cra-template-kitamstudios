/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  plugins: [require('tailwindcss')('./src/tailwind.config.json'), require('autoprefixer')],
}
