import process from 'process';
import { EventEmitter } from 'events';
import actions from './actions';

function pickListener() {
  let res = this.listeners[0];
  if (res) {
    this.listeners = [...this.listeners.slice(1)];
    return res;
  } else {
    return () => {};
  }
}

class UI extends EventEmitter {
  constructor() {
    super();

    this.input = process.stdin;
    this.output = process.stdout;
    this.listeners = [];
    this.actions = actions;
    this.data = {};

    this.finish = this.finish.bind(this);
    this.error = this.error.bind(this);
    this.log = this.log.bind(this);

    this.input.setEncoding('utf8');

    this.input.addListener('data', data => {
      pickListener.call(this)(data.trim());
    });
  }

  clear() {
    this.output.write('\u001b[2J\u001b[0;0H');
  }

  once(fn) {
    this.listeners.push(fn);
  }

  write(string) {
    this.output.write(string);
  }

  action(page, data) {
    this.clear();
    return this.actions[page](this, data);
  }

  finish() {
    this.emit('finish');
  }

  error(error) {
    this.emit('error', error);
  }

  log(log) {
    this.emit('log', log);
  }

  exit() {
    this.clear();
    process.exit();
  }
}

export default new UI();
