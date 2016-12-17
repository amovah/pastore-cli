import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';
import { writeFile as write } from 'fs';

export default path => {
  ui.writeInLine('Enter master password: ');

  ui.listen(masterPass => {
    masterPass = masterPass.trim();
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        write(path, pastore.exportDB(), err => {
          if (err) {
            console.log(err);
            process.exit();
          } else {
            console.log(chalk.green('database has been exported'));
            process.exit();
          }
        });
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  });
};
