import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';

export default (title, password, info) => {
  console.log(info);
  ui.writeInLine('Enter master password: ');

  ui.listen(masterPass => {
    masterPass = masterPass.trim();
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        pastore.add(title, password, info).then(pass => {
          if (pass === false) {
            console.log(chalk.red('Please choose another title'));
          } else {
            console.log(chalk.green('Password has been added successfully'));
          }
          process.exit();
        });
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  });
};
