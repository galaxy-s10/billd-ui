// const readline = require('readline');

const chalk = require('chalk');

class TerminalPrintPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    const plugin = { name: 'TerminalPrintPlugin' };

    const log = () => {
      console.log('  App running at:');
      console.log(`- Local:   ${chalk.cyan(this.options.local)}`);
      console.log(`- Network: ${chalk.cyan(this.options.network)}`);
      console.log();
    };

    // const clearConsole = () => {
    //   readline.cursorTo(process.stdout, 0, 0);
    //   readline.clearScreenDown(process.stdout);
    // };

    // const doneFn = () => {
    //   clearConsole();
    //   console.log(
    //     `${chalk.bgGreenBright(' DONE ')} ${chalk.green(
    //       'Compiled successfully !'
    //     )}`
    //   );
    //   log();
    // };

    // const invalidFn = () => {
    //   clearConsole();
    //   console.log(
    //     `${chalk.blue.bgBlueBright(' INFO ')} ${chalk.blue(
    //       'WAIT Compiling...'
    //     )}`
    //   );
    // };

    compiler.hooks.done.tapAsync(plugin, (compilation, callback) => {
      log();
      callback();
    });
    // compiler.hooks.invalid.tap(plugin, invalidFn);
  }
}

module.exports = TerminalPrintPlugin;
