import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';

export default app => {
  ui.writeInLine('Enter master password: ');

  ui.listen(masterPass => {
    masterPass = masterPass.trim();
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        let key = app.title ? 'title' : 'password';
        let passes = pastore.find(key, app[key]);

        if (passes) {
          for (let [index, pass] of passes.entries()) {
            console.log(chalk.cyan(index + 1 + '.'));
            console.log(' ', chalk.magenta('title:'), pass.title);
            console.log(' ', chalk.magenta('password:'), pass.password);
            console.log(' ', chalk.magenta('more information:'), pass.moreInfo);
          }
          process.exit();
        } else {
          console.log(chalk.red('No password found'));
          process.exit();
        }
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  });
};
