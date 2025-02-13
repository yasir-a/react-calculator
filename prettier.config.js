/** @type {import('prettier').Options} */
export default {
  // Global options (affect all file types)
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
  // Override for JSON files
  overrides: [
    {
      files: "*.json",
      options: {
        tabWidth: 2, // or any value you prefer
        printWidth: 80, // or your preferred maximum line length
        // any additional JSON-specific options
      },
    },
  ],
};
