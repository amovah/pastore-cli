import pastore from 'pastore';
import chalk from 'chalk';
import ui from '../ui';

let gen = function* (title, app) {
  let pass = '';
  let update = {
    password: '',
    title: app.title || title,
    info: ''
  };

  yield masterPass => {
    pastore.load(masterPass).then(status => {
      if (!status) {
        console.log(chalk.red('password is incorrect'));
        process.exit();
      } else {
        pass = masterPass;
        if (app.title && pastore.findTitles().includes(app.title)) {
          console.log(chalk.red('please choose another title'));
          process.exit();
        } else {
          console.log(chalk.bold('leave it blank, if you dont want change'));
          ui.writeInLine(`Enter new password for ${update.title}: `);
        }
      }
    }).catch(() => {
      console.log(chalk.red('initialize first. pastore init'));
      process.exit();
    });
  };

  yield password => {
    if (password === '') {
      delete update.password;
    } else {
      update.password = password;
    }

    console.log(chalk.bold('leave it blank, if you dont want change'));
    ui.writeInLine(`Enter new information for ${update.title}: `);
  };

  yield info => {
    if (!app.title) {
      delete update.title;
    }

    if (info === '') {
      delete update.info;
    } else {
      update.info = info;
    }

    pastore.load(pass).then(() => {
      pastore.update(title, update).then(() => {
        console.log(chalk.green('password has been updated'));
        process.exit();
      });
    });
  };
};


export default (title, app) => {
  ui.writeInLine('Enter master password: ');

  let handler = gen(title, app);
  ui.listen(data => {
    handler.next().value(data);
  });
};
