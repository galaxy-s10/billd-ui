const chalk = require('chalk');

console.log(
  `${chalk.bgBlueBright.black(' INFO ')} ${chalk.blueBright(
    `读取了: ${__filename.slice(__dirname.length + 1)}`
  )}`
);

// https://github.com/CaoMeiYouRen/conventional-changelog-cmyr-config
// https://github.com/ITxiaohao/conventional-changelog-custom-config
// https://juejin.cn/post/6844903888072654856#heading-10
// https://blog.cmyr.ltd/archives/caf24092.html
// 上面的都是fork了官方的预设二次修改的实现自定义的，
// 我这里直接使用conventional-changelog-eslint的预设，它会生成所有类型(feat/fix/docs/style等等)的commit

module.exports = {
  // writerOpts: {
  //     transform: (commit, context) => {
  //         console.log(commit)
  //         return commit
  //     },
  // }
};
