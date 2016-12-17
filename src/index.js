import app from 'commander';
import commands from './commands';

app
  .command('init')
  .description('initialize Pastore and set MasterPassword')
  .action(commands.init);

app
  .command('add <title> <password> [info]')
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

app.version(require('../package.json').version);

app.parse(process.argv);
