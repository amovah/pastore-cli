import { yellow } from 'chalk';
import pastore from 'pastore';
import { absVal } from '../utils';

export default ui => {
  let data = {};

  console.log(yellow('info and tag is optional'));
  ui.write('title: ');

  ui.once(title => {
    data.title = absVal(title);

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

    pastore.add(
      data.title,
      data.password,
      data.info,
      data.tag
    ).then(() => {
      ui.log('password has been added');
    }).catch(ui.error);
  });
};
