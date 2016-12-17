import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';

let pass = '';

let gen = function* (title, info) {
  yield masterPass => {
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        pass = masterPass;
        if (pastore.findTitles().includes(title)) {
          console.log(chalk.red('please choose another title'));
          process.exit();
        } else {
          ui.writeInLine(`Enter password for ${title}: `);
        }
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  };

  yield  password => {
    pastore.load(pass).then(() => {
      pastore.add(title, password, info).then(() => {
        console.log(chalk.green('password has been added successfully'));
        process.exit();
      });
    });
  };
};


export default (title, info) => {
  ui.writeInLine('Enter master password: ');

  let handler = gen(title, info);
  ui.listen(data => {
    handler.next().value(data);
  });
};
