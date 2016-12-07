import app from 'commander';
import commands from './commands';

app
  .command('init <password>')
  .description('initialize Pastore and set MasterPassword')
  .action(commands.init);

app
  .command('add <title> <password> [moreInfo]')
  .description('add password')
  .action(commands.add);

app
  .command('list')
  .description('list all passwords')
  .action(commands.list);

app
  .command('show <id>')
  .description('show a password')
  .action(commands.show);

app
  .command('find')
  .option('-t, --title [name]', 'find by title')
  .option('-p, --password [password]', 'find by password')
  .description('find a password by title or password')
  .action(commands.find);

app
  .command('remove <id>')
  .description('remove a password')
  .action(commands.remove);

app.version(require('../package.json').version);

app.parse(process.argv);
