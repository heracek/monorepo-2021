const proj = require('./package.json').name;
const path = require('path');

const src = path.resolve(__dirname, 'src/deck.mdx');
const dirname = path.dirname(src);

module.exports = {
  pathPrefix: `/${proj}`,
  plugins: [
    {
      resolve: '@mdx-deck/gatsby-plugin',
      options: {
        cli: true,
        path: src,
        dirname,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: dirname,
        ignore: ['node_modules', 'public', '.cache'],
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['mdx-deck', '@mdx-deck/themes'],
      },
    },
  ],
};
