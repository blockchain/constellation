/* eslint-disable no-param-reassign */

module.exports = {
  plugins: [
    {
      fn: () => {
        return {
          element: {
            enter: (node) => {
              if (
                node.name === "svg" &&
                node.attributes.width != null &&
                node.attributes.height != null
              ) {
                node.attributes.height = "100%";
                node.attributes.width = "100%";
              }
            },
          },
        };
      },
      name: "setWidthAndHeight",
      type: "visitor",
    },
    {
      fn: () => {
        return {
          element: {
            enter: (node) => {
              if (node.name === "svg") {
                node.attributes.fill = "currentColor";
              }
            },
          },
        };
      },
      name: "setCurrentColor",
      type: "visitor",
    },
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
};
