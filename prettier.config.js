/** @type {import('prettier').Options} */
export default {
  importOrder: [
    "^~/components/(.*)$",
    "^~/hooks/(.*)$",
    "^~/lib/(.*)$",
    "^~/routes/(.*)$",
    "^~/styles/(.*)$",
    "^~/utils/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
