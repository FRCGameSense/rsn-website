/** @type {import('prettier').Options} */
import prettierConfig from './prettierrc.json';
module.exports = {
  ...prettierConfig,
  plugins: ['prettier-plugin-tailwindcss'],
}
