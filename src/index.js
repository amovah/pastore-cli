import pastore from 'pastore';
import ui from './ui';

if (pastore.needInit) {
  ui.action('init');
} else {
  ui.action('password');
}

ui.on('finish', () => {
  ui.action('menu');
});

ui.on('error', err => {
  ui.action('error', err);
});

ui.on('log', log => {
  ui.action('log', log);
});
