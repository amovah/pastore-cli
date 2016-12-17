import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';
import { readFile as read } from 'fs';

export default (path, password) => {
  ui.writeInLine('Enter master password: ');

  ui.listen(masterPass => {
    masterPass = masterPass.trim();
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        read(path, 'utf8', (err, db) => {
          if (err) {
            console.log(err);
            process.exit();
          } else {
            pastore.importDB(db, password).then(() => {
              console.log(chalk.green('Database is imported'));
              process.exit();
            }).catch(() => {
              console.log(
                chalk.red('file not found or password is not correct')
              );
              process.exit();
            });
          }
        });
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  });
};
