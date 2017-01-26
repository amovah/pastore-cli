import pastore from 'pastore';

export default ui => {
  ui.write('enter the password title: ');

  ui.once(title => {
    pastore.remove(title).then(() => {
      ui.log('password has been removed');
    }).catch(ui.error);
  });
};
