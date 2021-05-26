module.exports = {
  processors: ["stylelint-processor-styled-components"],
  plugins: ["stylelint-prettier"],
  extends: [
    "stylelint-config-prettier",
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
  ],
  rules: {
    "no-descending-specificity": null,
    "prettier/prettier": true,
    "property-no-vendor-prefix": null,
  },
};
