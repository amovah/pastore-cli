import { yellow, red } from 'chalk';
import pastore from 'pastore';

export default ui => {
  let data = {};

  console.log(yellow('initliazing...'));
  ui.write('master password: ');

  ui.once(password => {
    data.password = password;
    console.log('available algorithms: ');
    console.log('AES, DES, TripleDES, RC4, RC4Drop, Rabbit, RabbitLegacy');
    ui.write('encryption algorithm: ');
  });

  ui.once(algorithm => {
    data.algorithm = algorithm;

    pastore.init(data.password, data.algorithm)
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
