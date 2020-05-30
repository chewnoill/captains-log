const withMdxFm = require('next-mdx-frontmatter')

const config = withMdxFm({extension: /\.mdx?$/})({})

module.exports = config

