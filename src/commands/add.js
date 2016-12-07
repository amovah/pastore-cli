import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';

export default (title, password, moreInfo) => {
  ui.writeInLine('Enter master password: ');

  ui.listen(masterPass => {
    masterPass = masterPass.trim();
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        pastore.add(title, password, moreInfo).then(pass => {
          console.log('Password id:', chalk.green(pass.id));
          process.exit();
        });
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  });
};
