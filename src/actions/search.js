import pastore from 'pastore';
import Fuse from 'fuse.js';
import { yellow } from 'chalk';

export default ui => {
  ui.write('title: ');

  ui.once(title => {
    ui.clear();

    let titles = pastore.findTitles();
    let result = new Fuse(titles).search(title);

    if (result.length === 0) {
      ui.error(new Error('not found'));
    } else {
      for (let index of result) {
        console.log(titles[index]);
      }
    }

    console.log('\n \n');
    console.log(yellow('hit enter to go to main menu'));

    ui.once(() => {
      ui.emit('finish');
    });
  });
};
