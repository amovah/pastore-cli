import pastore from 'pastore';
import { readFile as read } from 'fs';

export default ui => {
  let data = {};

  ui.write('path: ');

  ui.once(path => {
    data.path = path;
    ui.write('password: ');
  });

  ui.once(password => {
    data.password = password;

    ui.write('algorithm: ');
  });

  ui.once(algorithm => {
    data.algorithm = algorithm;

    read(data.path, 'utf8', (err, db) => {
      if (err) {
        ui.error(err);
      } else {
        pastore.importDB(db, data.password, data.algorithm)
          .then(() => {
            ui.log('database has been imported successfully');
          }).catch(ui.error);
      }
    });
  });
};
