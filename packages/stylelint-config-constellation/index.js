module.exports = {
  processors: ["stylelint-processor-styled-components"],
  plugins: ["stylelint-prettier"],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
    "stylelint-config-prettier",
  ],
  rules: {
    "property-no-vendor-prefix": null,
    "media-feature-name-disallowed-list": ["max-width", "min-width"],
    "at-rule-disallowed-list": ["media"],
    "no-descending-specificity": null,
    "prettier/prettier": true,
  },
};
