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
        let pass = pastore.find(title);
        if (!pass) {
          console.log(chalk.red('password not found'));
        } else {
          console.log(chalk.magenta('title:'), pass.title);
          console.log(chalk.magenta('password:'), pass.password);
          console.log(chalk.magenta('info:'), pass.info);
        }
        process.exit();
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  });
};
