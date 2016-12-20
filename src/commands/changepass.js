import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';


let gen = function* () {
  let oldPass = '';
  
  yield masterPass => {
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        oldPass = masterPass;
        ui.writeInLine('Enter new master password: ');
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  };

  yield newPass => {
    pastore.load(oldPass).then(() => {
      pastore.changePassword(newPass).then(() => {
        console.log(chalk.green('password has been changed'));
        process.exit();
      });
    });
  };
};

export default () => {
  ui.writeInLine('Enter old master password: ');

  let handler = gen();
  ui.listen(data => {
    handler.next().value(data);
  });
};
