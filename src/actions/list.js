import pastore from 'pastore';
import { cyan, magenta, yellow } from 'chalk';

export default ui => {
  let data = pastore.findPasswords().map(item => ({
    title: item.title,
    tag: item.tag
  }));

  for (let [index, item] of data.entries()) {
    ui.write(magenta(index + 1 + '. '));
    if (item.tag) {
      ui.write(cyan('#' + item.tag + ' '));
    }
    console.log(item.title);
  }

  console.log('\n\n');
  console.log(yellow('hit enter to go back'));

  ui.once(() => {
    ui.emit('finish');
  });
};
