const path = require('path');
const { readJSONSync, writeJSONSync } = require('fs-extra');

exports.updatePackageJSON = () => {
  const pkg = readJSONSync(path.resolve(__dirname, '../package.json')); // 项目根目录的package.json
  const pkgPath = path.resolve(__dirname, '../package.json'); // 项目根目录的package.json路径
  const packageJSON = readJSONSync(pkgPath);
  packageJSON.version = pkg.version;
  writeJSONSync(pkgPath, packageJSON, { spaces: 2 });
};
