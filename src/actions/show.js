import { yellow, cyan } from 'chalk';
import pastore from 'pastore';

export default ui => {
  ui.write('title: ');

  ui.once(title => {
    ui.clear();

    let pass = pastore.find(title);

    if (pass) {
      console.log(cyan('title:'), pass.title);
      console.log(cyan('password:'), pass.password);
      console.log(cyan('info:'), pass.info);
      console.log(cyan('tag:'), pass.tag);

      console.log(yellow('hit enter to go to main menu'));
      ui.once(() => { ui.emit('finish'); });
    } else {
      ui.error(new Error('not found'));
    }
  });
};
