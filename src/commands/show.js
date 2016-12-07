import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';

export default id => {
  ui.writeInLine('Enter master password: ');

  ui.listen(masterPass => {
    masterPass = masterPass.trim();
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        let pass = pastore.findById(id);
        console.log(chalk.magenta('id:'), pass.id);
        console.log(chalk.magenta('title:'), pass.title);
        console.log(chalk.magenta('password:'), pass.password);
        console.log(chalk.magenta('more information:'), pass.moreInfo);
        process.exit();
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  });
};
