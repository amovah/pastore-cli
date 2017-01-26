import { green, yellow } from 'chalk';

export default (ui, log) => {
  console.log(green(log));

  ui.write(yellow('hit enter to go to main menu'));

  ui.once(() => {
    ui.emit('finish');
  });
};
