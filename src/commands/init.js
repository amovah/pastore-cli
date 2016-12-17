import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';

export default () => {
  if (pastore.needInit) {
    ui.writeInLine('Enter new master password: ');

    ui.listen(masterPass => {
      pastore.init(masterPass).then(() => {
        console.log(chalk.green('pastore has been initialized successfully.'));
        process.exit();
      });
    });
  } else {
    console.log(chalk.red('your Pastore has been initialized already.'));
    process.exit();
  }
};
