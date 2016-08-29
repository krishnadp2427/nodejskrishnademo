const readdirSync = require('fs').readdirSync;
const lodash      = require('lodash');

module.exports = (path, options) => {
  console.log(`path ${path} option ${JSON.stringify(options)}`);
  const opt     = options || {};
  const modules = {};
  const files   = readdirSync(path);
  console.log(`files ${JSON.stringify(files)}`);

  files.forEach(file => {
    console.log(`files ${JSON.stringify(file)}`);

    if (/\.js$/.test(file) && file !== 'index.js') {
      let name = file;
      if (opt.stripFromName) { name = name.replace(opt.stripFromName, ''); }
      name = lodash.camelCase(name.replace(/\.js/, ''));
      console.log(`name ${JSON.stringify(name)}`);
      modules[name] = require(`${path}/${file}`); // eslint-disable-line
    }
  });
  console.log(`modules ${JSON.stringify(modules)}`);
  return modules;
};
