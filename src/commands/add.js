import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';

let gen = function* (title) {
  let pastorePass = '';
  let pass = '';

  yield masterPass => {
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        pastorePass = masterPass;
        if (pastore.findTitles().includes(title)) {
          console.log(chalk.red('please choose another title'));
          process.exit();
        } else {
          ui.writeInLine(`Enter password for ${title}: `);
        }
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  };

  yield password => {
    pass = password;
    console.log('its optional');
    ui.writeInLine(`Enter information for ${title}: `);
  };

  yield info => {
    pastore.load(pastorePass).then(() => {
      pastore.add(title, pass, info).then(() => {
        console.log(chalk.green('password has been added'));
        process.exit();
      });
    });
  };
};


export default title => {
  ui.writeInLine('Enter master password: ');

  let handler = gen(title);
  ui.listen(data => {
    handler.next().value(data);
  });
};
