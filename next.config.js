const withMdxFm = require("next-mdx-frontmatter");

const config = withMdxFm({ extension: /\.mdx?$/ })({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
});

module.exports = config;
