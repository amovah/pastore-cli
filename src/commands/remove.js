import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';

export default title => {
  ui.writeInLine('Enter master password: ');

  ui.listen(masterPass => {
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        pastore.remove(title).then(() => {
          console.log(chalk.green('password has been removed successfully'));
          process.exit();
        }).catch(() => {
          console.log('password not found');
          process.exit();
        });
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  });
};
