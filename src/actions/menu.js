import { cyan } from 'chalk';

export default ui => {
  let menu = {
    exit: 'exit',
    add: 'add a password',
    remove: 'remove a password',
    update: 'update a password',
    list: 'list passwords',
    show: 'show a password',
    search: 'search a password',
    generate: 'generate random passowrd',
    exportDB: 'export database to a file',
    importDB: 'import database from a file',
    clear: 'clear everthing'
  };

  let keys = Object.keys(menu);

  for (let i = 0; i < keys.length; ++i) {
    console.log(cyan(i), menu[keys[i]]);
  }
  console.log('\n\n');

  ui.write('enter menu number: ');
  ui.once(number => {
    if (isNaN(number) || number.trim() === '') {
      ui.emit('error', new Error('please enter a number'));
    } else {
      number = parseInt(number);

      if (number < 0 || number > keys.length - 1) {
        ui.emit('error', new Error('enter correct number :|'));
      } else {
        keys[number] === 'exit' ? ui.exit() : ui.action(keys[number]);
      }
    }
  });
};
