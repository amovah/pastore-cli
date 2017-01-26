import pastore from 'pastore';
import { red } from 'chalk';

export default ui => {
  ui.write('enter master password: ');

  ui.once(password => {
    pastore.load(password)
    .then(() => {
      ui.data.ready = true;
      ui.finish();
    })
    .catch(error => {
      console.log(red(error));
      process.exit();
    });
  });
};
