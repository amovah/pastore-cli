import app from 'commander';
import commands from './commands';

app
  .command('init')
  .description('initialize Pastore and set MasterPassword')
  .action(commands.init);

app
  .command('add <title>')
  .description('add password')
  .action(commands.add);

app
  .command('list')
  .description('list all passwords')
  .action(commands.list);

app
  .command('show <title>')
  .description('show a password')
  .action(commands.show);

app
  .command('remove <title>')
  .description('remove a password')
  .action(commands.remove);

app
  .command('export <path>')
  .description('export database to a file')
  .action(commands.exportDB);

app
  .command('import <path> <password>')
  .description('import database from a file by database password')
  .action(commands.importDB);

app
  .command('clear')
  .description('clear everything, you will have feresh pastore')
  .action(commands.clear);

app
  .command('changepass')
  .description('change master password')
  .action(commands.changepass);

app
  .command('update <title>')
  .description('update a password. password will be asked later.')
  .option('-t, --title <title>', 'change title')
  .action(commands.update);

app
  .command('search <title>')
  .description('search a password by title')
  .action(commands.search);

app.version(require('../package.json').version);

app.parse(process.argv);
