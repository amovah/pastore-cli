import { yellow } from 'chalk';
import pastore from 'pastore';
import { absVal } from '../utils';

export default ui => {
  let data = {};

  console.log(yellow('for not editing, leave it empty'));
  ui.write('password title: ');

  ui.once(oldTitle => {
    data.oldTitle = absVal(oldTitle);
    ui.write('new title: ');
  });

  ui.once(newTitle => {
    data.newTitle = absVal(newTitle);

    ui.write('password: ');
  });

  ui.once(password => {
    data.password = absVal(password);

    ui.write('info: ');
  });

  ui.once(info => {
    data.info = absVal(info);

    ui.write('tag: ');
  });

  ui.once(tag => {
    data.tag = absVal(tag);

    pastore.update(
      data.oldTitle,
      {
        title: data.newTitle,
        password: data.password,
        info: data.info,
        tag: data.tag
      }
    ).then(() => {
      ui.log('password has been updated');
    }).catch(ui.error);
  });
};
