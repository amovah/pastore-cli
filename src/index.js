import app from 'commander';
import commands from './commands';

app
  .command('init <password>')
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

app.version(require('../package.json').version);

app.parse(process.argv);
