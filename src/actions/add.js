import { yellow } from 'chalk';
import pastore from 'pastore';

export default ui => {
  let data = {};

  console.log(yellow('info and tag is optional'));
  ui.write('title: ');

  ui.once(title => {
    data.title = title;
    ui.write('password: ');
  });

  ui.once(password => {
    data.password = password;

    ui.write('info: ');
  });

  ui.once(info => {
    data.info = info;

    ui.write('tag: ');
  });

  ui.once(tag => {
    data.tag = tag;

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
