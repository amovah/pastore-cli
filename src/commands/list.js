import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';

export default () => {
  ui.writeInLine('Enter master password: ');

  ui.listen(masterPass => {
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        for (let [index, title] of pastore.findTitles().entries()) {
          console.log(chalk.cyan(index + 1 + '.'), title);
        }
        process.exit();
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  });
};
