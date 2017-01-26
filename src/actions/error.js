import { red, yellow } from 'chalk';

export default (ui, error) => {
  console.log(red(error));

  ui.write(yellow('hit enter to go to main menu'));

  ui.once(() => {
    ui.emit('finish');
  });
};
