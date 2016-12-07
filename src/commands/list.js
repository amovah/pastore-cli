import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';

export default () => {
  ui.writeInLine('Enter master password: ');

  ui.listen(masterPass => {
    masterPass = masterPass.trim();
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        for (let [index, pass] of pastore.findAll().entries()) {
          console.log(chalk.cyan(index + 1 + '.'));
          console.log(' ', chalk.magenta('id:'), pass.id);
          console.log(' ', chalk.magenta('title:'), pass.title);
        }
        process.exit();
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  });
};
