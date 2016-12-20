import pastore from 'pastore';
import chalk from 'chalk';
import Fuse from 'fuse.js';
import ui from '../ui';

export default title => {
  ui.writeInLine('Enter master password: ');

  ui.listen(masterPass => {
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        let titles = pastore.findTitles();
        let searcher = new Fuse(titles);
        for (let [i, index] of searcher.search(title).entries()) {
          console.log(chalk.cyan(i + 1) + '.', titles[index]);
        }
        process.exit();
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  });
};
