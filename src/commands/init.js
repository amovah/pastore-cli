import pastore from 'pastore';
import { red, green } from 'chalk';

export default (password) => {
  if (pastore.needInit) {
    pastore.init(password).then(() => {
      console.log(green('Pastore has been initialized successfully.'));
      process.exit();
    });
  } else {
    console.log(red('your Pastore has been initialized already.'));
    process.exit();
  }
};
