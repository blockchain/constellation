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
                node.attributes.fill = "currentColor";
                node.attributes.height = "100%";
                node.attributes.width = "100%";
              }
            },
          },
        };
      },
      name: "setFillToCurrentColorAndWidthHeight100",
      type: "visitor",
    },
    {
      name: "prefixIds",
      params: {
        prefix: "icon-",
      },
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
