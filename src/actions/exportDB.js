import pastore from 'pastore';
import { writeFile as write } from 'fs';

export default ui => {
  ui.write('file path: ');

  ui.once(path => {
    write(path, pastore.exportDB(), err => {
      if (err) {
        ui.error(err);
      } else {
        ui.log('database has been exported successfully');
      }
    });
  });
};
