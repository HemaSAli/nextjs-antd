const withAntdLess = require('next-plugin-antd-less');
const antdVars = require('./vars.json');
module.exports = withAntdLess({
  reactStrictMode: true,
  modifyVars: {...antdVars}
});
