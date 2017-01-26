import { yellow, green } from 'chalk';
import pastore from 'pastore';

export default ui => {
  ui.write(yellow('type yes to clear: '));
  ui.once(answer => {
    if (answer === 'yes') {
      pastore.clear().then(() => {
        console.log(green('pastore has been cleared'));
        process.exit();
      }).catch(ui.error);
    } else {
      ui.action('menu');
    }
  });
};
