import chalk from 'chalk';

class TerminalPrintPlugin {
  options;

  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.done.tapAsync(
      'TerminalPrintPlugin',
      (compilation, callback) => {
        console.log('  App running at:');
        console.log(`- Local:   ${chalk.cyan(this.options.local)}`);
        console.log(`- Network: ${chalk.cyan(this.options.network)}`);
        console.log();
        callback();
      }
    );
  }
}

export default TerminalPrintPlugin;
