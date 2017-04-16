import { generate } from 'stringing';

export default ui => {
  let data = {};
  let length = 0;

  ui.write('length: ');

  ui.once(answer => {
    length = answer;
    ui.write('symbols ? [y/n] ');
  });

  ui.once(answer => {
    data.symbol = answer === 'y';
    ui.write('numbers ? [y/n] ');
  });

  ui.once(answer => {
    data.number = answer === 'y';
    ui.write('uppercase characters ? [y/n] ');
  });

  ui.once(answer => {
    data.upper = answer === 'y';
    ui.write('lowercase characters ? [y/n] ');
  });

  ui.once(answer => {
    data.lower = answer === 'y';

    let options = {};
    for (let [key, value] of Object.entries(data)) {
      if (value === true) {
        options[key] = 1;
      }
    }
    ui.log(generate(length, options));
  });

};
