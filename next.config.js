const withTM = require('next-transpile-modules')([
  '@syllepsis/editor',
  '@syllepsis/access-react',
  '@syllepsis/plugin-basic',
  '@syllepsis/plugin-code-block',
  '@syllepsis/plugin-table',
  '@icon-park/react',
]);

module.exports = withTM();
